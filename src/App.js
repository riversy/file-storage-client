import './App.css';
import FileList from './components/FileList'


function App() {
    return (
        <>
            <div className="ui text container">
                <div className="ui segment">
                    <h2 className="ui center aligned header">
                        File Storage Service
                    </h2>
                    <FileList/>
                </div>
            </div>
        </>
    );
}

export default App;
