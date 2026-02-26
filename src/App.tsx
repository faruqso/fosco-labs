import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { TemplatePage } from './pages/TemplatePage';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/template" element={<Layout><TemplatePage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
