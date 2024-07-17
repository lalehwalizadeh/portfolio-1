import './botton.css';


export  function Project1(props){


    return(
        <div>
            <p>This is one of the games we worked on in the JavaScript season.
                This game works in such a way that you have to guess the number hidden in the question mark box.
                In the box on the left, you can enter a number and press the check button to see the result.
                If your number is greater than the hidden number, you will see this text on the right side (high),
                and if your number is small, this text will be displayed for you. will be (low).
                This way you can guess more easily. And if you enter the correct number, you will win and you will
                see some changes such as changing the background color and revealing the hidden number.
            
            </p>
            <button className="btn_design" onClick={props.onHide1}> Hide </button>
        </div>
    )
}
export  function Project2(props){
    return(
        <div>
            <p>This is one of the games based on css ، html and JS.
                And its function is that by clicking on the  roll dice button,
                an image of the dice will be randomly displayed in the middle of the screen,
                and points will be given to the player based on the number of dice.
                The player can press the button several times, but if the image of the dice  becomes one,
                the player will lose all her points and her turn will be transferred to the second player, and if she presses
                the Hold button before the number one comes , she can lose her points. save Any player whose score reaches
                50 first will win
            </p>
            <button className="btn_design" onClick={props.onHide2}> Hide </button>
        </div>
    )
}
export  function Project3(props){
    return(
        <div>
            <p>After reading some basic topics of React, this was the first project we worked on and learned a lot of topics.
                Its function is that in the box above, when you click on the Add New Expense button,
                you can add a new expense according to the name, date and cost that you enter,
                add the lower list radar, and in the filter by year section, specify the year you want.
                You can also see the percentage of each month's cost.
            
            </p>
            <button className="btn_design" onClick={props.onHide3}> Hide </button>
        </div>
    )
}
export function Project4(props) {
    return (
        <div>
            <p>It was a team work where three of my friends and I worked on some parts.
                In fact, we were entrusted with the correction of some functions.

            </p>
            <button className="btn_design" onClick={props.onHide4}> Hide </button>
        </div>
    )
}