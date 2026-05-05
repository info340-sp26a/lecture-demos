import { HeaderComponent } from './Header.jsx';
import { MainContent} from './MainContent.jsx';

export function App(props) {
  return (
    <>
      <HeaderComponent />
      <div>
        <p>No news today</p>
        <MainContent />
      </div>
    </>

  )
}
