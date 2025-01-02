import React, { useEffect, useState } from 'react';
import { REST_MENU_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import MenuCard from './MenuCard';
import ResHeader from './ResHeader';

const RestaurantMenu = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState([]);
    const [hiddenStates, setHiddenStates] = useState([]);
    const [isVeg, setIsVeg] = useState(false);
    const [isNonVeg, setIsNonVeg] = useState(false)

    const getData = async () => {
        try {
            const data = await fetch(REST_MENU_URL + id);
            const rest_menu = await data.json();
            console.log(rest_menu);

            const cards = rest_menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
            setMenu(cards);

            // Initialize hiddenStates with `true` for all cards
            setHiddenStates(new Array(cards.length).fill(true));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const toggleHiddenState = (index) => {
        let dropDown = document.getElementById("dropDown-" + index)
        if(dropDown != null){
            if(dropDown.classList.contains("fa-caret-down")){
                dropDown.classList.remove("fa-caret-down");
                dropDown.classList.add("fa-caret-up")
            }
    
            else{
                dropDown.classList.remove("fa-caret-up");
                dropDown.classList.add("fa-caret-down")
            }
        }
       
       
        setHiddenStates((prevStates) => 
            prevStates.map((isHidden, i) => (i === index ? !isHidden : isHidden))  
        );
    };

    const toggleVegStatus = () => {
        setIsVeg(!isVeg);
        if(isNonVeg){
            setIsNonVeg(false)
            document.getElementById("non-veg").checked  = false;
        }
    }

    const toggleNonVegStatus = () => {
        setIsNonVeg(!isNonVeg);
        if(isVeg){
            setIsVeg(false)
            document.getElementById("veg").checked  = false;
        }
    }

    const isAnyVegItem = (menu) => menu.some((item) => item?.card?.info?.itemAttribute.vegClassifier === "VEG");
const isAnyNonVegItem = (menu) => menu.some((item) => item?.card?.info?.itemAttribute.vegClassifier === "NONVEG");


    return (
        <div>
            <ResHeader id = {id}/>
            <div>
                <div style = {{display: "flex", alignItems: "center", gap: "10px"}}>
                    <p>Veg</p>
                    <p><input type = "checkbox" id = "veg" onChange = {toggleVegStatus} /></p>
                  
                </div>
              
                <div style = {{display: "flex",  alignItems: "center", gap: "10px"}}>
                    <p>Non-Veg</p>
                     <p><input type = "checkbox" id = "non-veg" onChange = {toggleNonVegStatus} /></p>
                </div>
            </div>
            {menu.map((card, index) => {
                if (card.card.card.itemCards) {
                    return ((isVeg && isAnyVegItem(card.card.card.itemCards)) || (isNonVeg && isAnyNonVegItem(card.card.card.itemCards)) || (!isVeg && !isNonVeg) ? 
                        <div key={index}>
                            <div className="menu-header" style={{ display: 'flex', alignItems: 'center' }}>
                                <h4
                                    style={{
                                        background: 'lightGray',
                                        padding: '7px',
                                        width: '100%',
                                        borderRadius: '10px',
                                    }}
                                >
                                    {card.card.card.title}
                                </h4>
                                <i
                                    className="fa-solid fa-caret-down"
                                    id = {"dropDown-"+ index}
                                    style={{ position: 'absolute', left: '95%', cursor: 'pointer' }}
                                    onClick={() => toggleHiddenState(index)}
                                ></i>
                            </div>

                            {!hiddenStates[index] && (
                                <MenuCard items={card.card.card.itemCards} id={card.card.card.title} isVeg = {isVeg} isNonVeg = {isNonVeg}/>
                            )}
                        </div>: ''
                    );
                } else if (card.card.card.categories) {
                    return (
                        <div key={index}>
                            <div className="menu-header" style={{ display: 'flex', alignItems: 'center' }}>
                                <h4
                                     style={{
                                        background: 'lightGray',
                                        padding: '7px',
                                        width: '100%',
                                        borderRadius: '10px',
                                    }}
                                >
                                    {card.card.card.title}
                                </h4>
                                <i
                                    className="fa-solid fa-caret-down"
                                    style={{ position: 'absolute', left: '95%', cursor: 'pointer' }}
                                    onClick={() => toggleHiddenState(index)}
                                ></i>
                            </div>

                            {!hiddenStates[index] &&
                                card.card.card.categories.map((cat, catIndex) => (
                                    <div key={catIndex} style={{ margin: '20px' }}>
                                        <p style={{ fontWeight: 'bold' }}>{cat.title}</p>
                                        <MenuCard items={cat.itemCards} isVeg = {isVeg} isNonVeg = {isNonVeg} />
                                    </div>
                                ))}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );   
};

export default RestaurantMenu;
