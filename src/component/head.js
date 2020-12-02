import React from 'react'
import './home.css'

import Home from "../container/home"
import Inventory from "../container/inventory"

function Head() {
    return(
        <div>
            <div className = 'head-container'> 

                <div className="head-nav">
                    <div className="nav-left">
                        <p>logo</p>
                    </div>
                    <div className="nav-right">
                        
                            <a>首页</a>
                            <a>库存页</a>
                            <a>可租车型</a>
                            <a>VIN查询</a>
                            <a>常见问题</a>
                            <a>联系我们</a>
                            <a>English</a>
                    
                    </div>

                   
                </div>

                <div className = "head-contain">
                    <h1 className = "head-header">谁来为您车辆的贬值买单</h1>
                    <br/>
                    <p className = "head-colortext">————————  LendingCar</p>
                    <br/>
                    <p>lendingcar 是你最好的出行伙伴</p>
                    <p>我们为您开启自由出行第一步</p>
                    <br/>
                    <br/>
                    <div>
                        
                    </div>
                    <button class="head-btn">下载App</button>
                </div>
                
            </div>   
        </div>
    )
}

export default Head