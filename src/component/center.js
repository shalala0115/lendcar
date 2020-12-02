import React from 'react'
import './home.css'

function Center() {
    return(
        <div>
            <div className = "part1">
                <div className = "part1-topbox"/>
                <div>
                    <div className="center-part1"> 
                        <div className="part1-left">
                            <h2>无首付, 无月费</h2>
                            <div class = "part1-centerbox"/>
                            <p>无首付，无月费。 您只需要支付一笔可退换的押金即可通过</p>
                            <p>lending Car驾车出行（这笔押金将在一年合同结束后退还给您）</p>
                        </div>
                        <div className= "part1-right">
                                <img src ="https://cutt.ly/orra79l"/>
                        </div>   
                    </div>
                </div>
               
                 <div className="part1-bottombox"/>
            </div>

            <div className = "part2">
                <div className = "part2-topbox"/>
                <div>
                    <div className="center-part2"> 
                        
                        <div className= "part2-left">
                                <img src ="https://cutt.ly/orra79l"/>
                        </div>   
                        <div className="part2-right">
                            <h2>无车辆折旧费</h2>
                            <div className = "part1-centerbox"/>
                            <p>车辆折旧总是令人烦恼， LendingCar为您解忧。 LendingCar将在</p>
                            <p className = "seconetline">一年租约结束后的45天内归还全额押金</p>
                        </div>
                    </div>
                </div>
               
                 <div className="part2-bottombox"/>
            </div>


        </div>
    )
}

export default Center