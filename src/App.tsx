import React, { useState } from 'react';
import MenuBar from './layout/menubar/MenuBar';
import Home from './pages/Home';
import TempLogin from './pages/TempLogin';
import VideoCallPage from './pages/VideoCallPage';
import { RoomInfo } from './types';

function App() {
  const [uid, setUid] = useState<undefined | number>(undefined);
  const [roomInfo, setRoomInfo] = useState<undefined | RoomInfo>(undefined);
  const [inCall, setInCall] = useState(false);

  if (uid === undefined) {
    return <TempLogin setUid={setUid} />;
  }

  return (
    <div>
      <MenuBar uid={uid} />
      {inCall && roomInfo ? (
        <VideoCallPage uid={uid} roomInfo={roomInfo} setInCall={setInCall} />
      ) : (
        <Home uid={uid} setRoomInfo={setRoomInfo} setInCall={setInCall} />
      )}
    </div>
  );
}

export default App;
