import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      // Stop synth sound
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          setIsPlaying(false);
        }, 500);
      } else {
        setIsPlaying(false);
      }
    } else {
      // Create smooth Web Audio ambient synth pad
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1); // Soft volume
        gainNode.connect(ctx.destination);
        gainRef.current = gainNode;

        // Ambient Frequency Oscillator A4 (220Hz + 330Hz E4 warm synth pad)
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(220, ctx.currentTime);

        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(330, ctx.currentTime);

        osc1.connect(gainNode);
        osc2.connect(gainNode);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;

        setIsPlaying(true);
      } catch (e) {
        console.warn('AudioContext error:', e);
      }
    }
  };

  useEffect(() => {
    return () => {
      audioCtxRef.current?.close();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 ${
        isPlaying
          ? 'bg-neon-indigo/20 border-neon-indigo text-neon-cyan shadow-neon-cyan'
          : 'bg-dark-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
      }`}
      title={isPlaying ? 'Mute Ambient Sound' : 'Play Futuristic Ambient Sound'}
    >
      <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce text-neon-cyan' : ''}`} />
      <span>{isPlaying ? 'SOUND: ON' : 'SOUND: OFF'}</span>
      {isPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
    </button>
  );
};
