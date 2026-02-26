import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { TemplatePage } from './pages/TemplatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/template" element={<Layout><TemplatePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
