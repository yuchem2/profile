import './App.css'
import Content from './component/content'

export default function App() {
    return (
        <div className="Profile">
            <div className="Profile-container">
                <div className="Profile-block">
                    <span className="Profile-header">ABOUT ME</span>
                    <span className="Profile-paragraph">(짧은 자기소개)</span>
                </div>
                <div className="Profile-block">
                    <span className="Profile-header">CONTACT</span>
                </div>
            </div>
            <Content title="EDUCATION"></Content>
            <Content title="SKILLS"></Content>
            <Content title="CAREER"></Content>
            <Content title="AWARDS"></Content>
            <Content title="PROJECT"></Content>
            <Content title="OTHERS"></Content>
        </div>
    )
}
