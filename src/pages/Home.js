import uniaoanimal from '../image/uniaoanimal.png';

function Home() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#2b7f3a', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ marginTop: 0 }}>Home</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={uniaoanimal} alt="Logo" />
      </div>
    </div>
  );
}

export default Home;