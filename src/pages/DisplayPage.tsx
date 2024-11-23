import React from 'react';
import { Radio } from 'lucide-react';
import { socket } from '../socket';

const DisplayPage = () => {
  const [connected, setConnected] = React.useState(socket.connected);
  const [lastClick, setLastClick] = React.useState<{ color: string; timestamp: number } | null>(null);

  React.useEffect(() => {
    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);
    const onButtonClick = (data: { color: string }) => {
      setLastClick({ color: data.color, timestamp: Date.now() });
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('buttonClick', onButtonClick);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('buttonClick', onButtonClick);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Display Screen</h1>
          <div className={`inline-flex items-center ${connected ? 'text-green-400' : 'text-red-400'}`}>
            <span className={`h-3 w-3 rounded-full mr-2 ${connected ? 'bg-green-400' : 'bg-red-400'}`}></span>
            {connected ? 'Connected' : 'Disconnected'}
          </div>
        </div>

        <div className="flex items-center justify-center">
          {lastClick ? (
            <div
              className={`w-64 h-64 rounded-full flex items-center justify-center transition-all transform scale-100 animate-pulse`}
              style={{
                backgroundColor: lastClick.color,
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            >
              <span className="text-white text-2xl font-bold">
                Button Pressed!
              </span>
            </div>
          ) : (
            <div className="text-center text-white">
              <Radio className="h-24 w-24 mx-auto mb-4 animate-pulse" />
              <p className="text-xl">Waiting for button press...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;