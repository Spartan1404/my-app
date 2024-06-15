import {ColorModeContext, useMode} from "./theme"
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./Scenes/Global/topbar";
import Dashboard from "./Scenes/Dashboard"
import MySidebar from "./Scenes/Global/mysidebar"
import { Route, Routes } from "react-router-dom";
import Team from "./Scenes/Team/index"
import Contacts from "./Scenes/Contacts/index"
import Invoices from "./Scenes/Invoices/index"
import Form from "./Scenes/Form";
import Calendar from "./Scenes/Calendar";
import FAQ from "./Scenes/Faq";
import Bar from "./Scenes/Bar";
import Pie from "./Scenes/Pie";
import Line from "./Scenes/Line.jsx";
import Geography from "./Scenes/Geography/index.jsx";
import About from "./Scenes/About/index.jsx";

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <MySidebar />
                    <main className={"content"}>
                        <Topbar/>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/team" element={<Team/>}/>
                            <Route path="/contacts" element={<Contacts/>}/>
                            <Route path="/invoices" element={<Invoices/>}/>
                            <Route path="/form" element={<Form/>}/>
                            <Route path="/calendar" element={<Calendar/>}/>  
                            <Route path="/faq" element={<FAQ/>}/>
                            <Route path="/bar" element={<Bar/>}/> 
                            <Route path="/pie" element={<Pie/>}/>
                            <Route path="/line" element={<Line/>}/>
                            <Route path="/geography" element={<Geography/>}/>
                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
