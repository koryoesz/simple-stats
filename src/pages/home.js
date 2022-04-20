import '../styles/home.css';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import data from '../data.json';
import TopStats from '../components/top-stats';


export default function Home() {
    const [currentTab, setCurrentTab] = useState("yesterday");
    const [Data, setData] = useState(data.errors_yesterday);

    const handleChange = (event, newValue) => {
        if(newValue === "lastHour"){
            setData(data.errors_last_hour);
        }
        else if (newValue === "today"){
            //no data
            setData([]);
        } else if(newValue === "yesterday"){
            setData(data.errors_yesterday);
        } else if(newValue === "last3days"){
            setData(data.errors_last_3days)
        }

        setCurrentTab(newValue);
    };

  return (
      <div>
        <Box sx={{ width: '50%', bgcolor: 'background.paper' }}>
            <Tabs value={currentTab} onChange={handleChange} centered>
                <Tab value="lastHour" label="Last Hour" />
                <Tab value="today" label="Today" />
                <Tab value="yesterday" label="Yesterday" />
                <Tab value="last3days" label="Last 3 days" />
            </Tabs>
        </Box>

        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>

            <TopStats data={Data} />
      
            <div class="box-rule">
                <div class="box-one"></div>
                <div class="box-two"></div>
                <div class="box-three"></div>
                <div class="box-four"></div>
            </div>
            <div class="middle-stat">
                <div class="middle-stat-column">
                    <span class="icon-one"></span>
                    <label>Error 500: 1 256</label>
                </div>
                <div class="middle-stat-column">
                    <span class="icon-two"></span>
                    <label>Error 500: 1 256</label>
                </div>
                <div class="middle-stat-column">
                    <span class="icon-three"></span>
                    <label>Error 500: 1 256</label>
                </div>
                <div class="middle-stat-column">
                    <span class="icon-four"></span>
                    <label>Error 500: 1 256</label>
                </div>
            </div>
            <div class="final-stat">
                <div class="section-one">
                    <div class="column">
                        <span class="icon">
                            <img src="./images/icon-1.png" />
                        </span>
                        <div>
                            <div class="inner title">Searches <span class="percent">+5%</span></div>
                            <div class="inner first-val">{data.data[0].searches_current_last_hour} <span>Yesterday</span></div>
                            <div class="inner second-val">27 985 <span>Last Friday</span></div>
                            </div>
                        </div>
                    <div class="column">
                        <div>
                            <div class="inner title">Mobile Traffic: 100% </div>
                            <div class="inner title"> Web Traffic: {data.data[0].mobile_pessimizer}%</div>
                            <div class="inner second-val"><span>You get 100% traffic on mobile and desktop devices.</span></div>
                            <div class="inner title help">Help: <span>Searches</span>, <span>Permission</span></div>
                        </div>
                    </div>

                    <div class="bottom-border"></div>
                </div>
                <div class="section-one">
                    <div class="column">
                        <span class="icon">
                            <img src="./images/icon2.png" />
                        </span>
                        <div>
                            <div class="inner title red">Clicks <span class="percent red">-13%</span></div>
                            <div class="inner first-val">{data.data[0].clicks_previous_last_hour} <span>Yesterday</span></div>
                            <div class="inner second-val">27 985 <span>Last Friday</span></div>
                            </div>
                        </div>
                    <div class="column">
                        <div>
                            <div class="inner title red">CTR, {data.data[0].ctr_yesterday} </div>
                            <div class="inner title"> Web Traffic: 100%</div>
                            <div class="inner second-val"><span>You get 100% traffic on mobile and desktop devices.</span></div>
                            <div class="inner title help">Help: <span>Searches</span>, <span>Permission</span></div>
                        </div>
                    </div>
                    <div class="bottom-border"></div>
                </div>
                <div class="section-one">
                    <div class="column">
                        <span class="icon">
                            <img src="./images/icon-3.png" />
                        </span>
                        <div>
                            <div class="inner title">Searches <span></span></div>
                            <div class="inner first-val">{data.data[0].searches_previous_last_hour} <span>Yesterday</span></div>
                            <div class="inner second-val help">{data.data[0].searches_previous_last_hour} <span>Last Friday</span></div>
                            </div>
                        </div>
                    <div class="column">
                        <div>
                            <div class="inner title red">MCTR: 0,04% </div>
                            <div class="inner title"> Web Traffic: 100%</div>
                            <div class="inner second-val"><span>You get 100% traffic on mobile and desktop devices.</span></div>
                            <div class="inner title help">Help: <span>Searches</span>, <span>Permission</span></div>
                        </div>
                    </div>

                    <div class="bottom-border"></div>
                </div>
            </div>
        </Box>
  </div>
);

}

