import './home.css'
export default function Home(){
    return(

            <div className="home-page">
                <header>
                    <div className="title">
                        <div className="text-wrapper">
                            <p>Stay Focused and Organized</p>
                            <p>Using Time-Tracker</p>
                            <p>a VS-Code Extention</p>
                        </div>
                    </div>
                    <img src="/main-img.png" alt="main-img" />   
                </header>
                <div className='Explore'>
                    <p>Expore More About It</p>
                </div>
                <div className="sections">
                    <section className="section-row">
                        <div className="img-wrapper">
                            <img src="/time.jpg" alt="" />
                        </div>
                        <div className="text">
                            <div className="heading">Automatic Time</div>
                            <div className="description">Tracking The extension intelligently captures the time spent on each file and project within the VS Code environment, eliminating the need for manual tracking. It starts tracking as soon as you open a project and automatically stops when you switch to another task or close the project.</div>
                        </div>
                    </section>
                    <section className="section-row">
                        <div className="text">
                            <div className="heading">Project and Task Management</div>
                            <div className='description'>Keep track of multiple projects and their associated tasks. Create, organize, and manage projects with ease, ensuring efficient project management and improved time allocation.</div>
                        </div>
                        <div className="img-wrapper">
                            <img src="/Projectmanagment_1.jpeg" alt=""/>
                        </div>
                    </section>
                    <section className="section-row">
                        <div className="img-wrapper">
                            <img src="/ChartsGraphs.jpg" alt=""/>
                        </div>
                        <div className="text">
                            <div className="heading">Visual Representation</div>
                            <div className='description'>The extension provides intuitive visualizations, such as graphs and charts, to help you understand and analyze your time usage. Easily identify patterns, identify areas of improvement, and optimize your workflow for maximum productivity.</div>
                        </div>
                    </section>
                    <section className="section-row">
                        <div className="text">
                            <div className="heading">Reporting and Analytics</div>
                            <div className='description'>Generate detailed reports summarizing your time allocation across projects, tasks, and specific files. Gain insights into your working habits, identify time-consuming activities, and make informed decisions to optimize your productivity.</div>
                        </div>
                        <div className="img-wrapper">
                            <img src="/reports.png" alt="" />
                        </div>
                    </section>
                    <section className="section-row">
                        <div className="img-wrapper">
                            <img src="/Customization.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="heading">Customization and Integration</div>
                            <div className='description'>Tailor the extension to suit your preferences and workflow. Customize time tracking intervals, configure project settings, and integrate with other tools and services, such as task management applications or calendar systems, to streamline your workflow.</div>
                        </div>
                    </section>
                    <section className="section-row">
                        <div className="text">
                            <div className="heading">Notifications and Reminders</div>
                            <div className='description'>Set up notifications and reminders to stay informed about your progress, approaching deadlines, or excessive time spent on specific tasks. This feature helps you stay accountable and maintain focus on your work.</div>
                        </div>
                        <div className="img-wrapper">
                            <img src="/Notification.jpg" alt="" />
                        </div>
                    </section>
                </div>
            </div>
    )
}