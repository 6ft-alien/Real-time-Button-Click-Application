import React from 'react';
import { socket } from '../socket';

const ButtonPage = () => {
  const [connected, setConnected] = React.useState(socket.connected);

  React.useEffect(() => {
    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  const handleClick = (color: string) => {
    socket.emit('buttonClick', { color });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Button Controller</h1>
          <div className={`inline-flex items-center ${connected ? 'text-green-400' : 'text-red-400'}`}>
            <span className={`h-3 w-3 rounded-full mr-2 ${connected ? 'bg-green-400' : 'bg-red-400'}`}></span>
            {connected ? 'Connected' : 'Disconnected'}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <button
            onClick={() => handleClick('blue')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-8 px-4 rounded-xl transition-all transform hover:scale-105 active:scale-95"
          >
            Blue Button
          </button>
          <button
            onClick={() => handleClick('red')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-8 px-4 rounded-xl transition-all transform hover:scale-105 active:scale-95"
          >
            Red Button
          </button>
          <button
            onClick={() => handleClick('green')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-8 px-4 rounded-xl transition-all transform hover:scale-105 active:scale-95"
          >
            Green Button
          </button>
          <button
            onClick={() => handleClick('purple')}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-8 px-4 rounded-xl transition-all transform hover:scale-105 active:scale-95"
          >
            Purple Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;