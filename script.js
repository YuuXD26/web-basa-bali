@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root{
    --body-bd-color: #fff;
    --first-color: red;
    --second-color: yellow;
    --third-color: black;

    /* teks */
    --text-normal-size: 500;
    --text-small-size: 700;

    --fw-1: 10px;
    --fw-2: 11px;
    --fw-3: 12px;
    --fw-4: 13px;
    --fw-5: 14px;
    --fw-6: 15px;
    --fw-7: 16px;
    --fw-8: 17px;
    --fw-9: 18px;
    --fw-10: 19px;
    --fw-11: 20px;

    --hover-color: red;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}

*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

.header{
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url(./images/background.png);
    background-position: center;
    background-size: cover;
    position: relative;
}

nav{
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;

}

nav h2{
    font-size: var(--fw-10);
    color: var(--second-color);
}

.nav-items{
    flex: 1;
    text-align: right;
}

.nav-items ul li{
    display: inline-block;
    padding: 10px;
    position: relative;
}

.nav-items ul li a{
    color: #fff;
    font-size: 15px;
}

.nav-items ul li::after{
    content: "";
    width: 0%;
    height: 2px;
    background: #fff;
    display: block;
    margin: auto;
}

.nav-items ul li:hover::after{
    width: 100%;
}

.text-box{
    width: 90%;
    color: #fff;
    position: absolute;
    top: 35%;
    transform: translate(15%);
}

.text-box h2{
    font-size: 400%;
}

.text-box p{
    margin-bottom: 20px;
    font-size: var(--fw-10);
}

.text-box button{
    background: var(--second-color);
    font-size: var(--text-normal-size);
    font-weight: var(--text-normal-size);
    margin-top: 25px;
    padding: 20px 30px;
    letter-spacing: 1px;
    border: 0.25rem solid var(--second-color);
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    overflow: hidden;
}

.text-box button:hover{
    color: var(--third-color);
}

.text-box button::after{
    content: "";
    background: #ecf0f1;
    position: absolute;
    z-index: -1;
    padding: 0.85em 0.75em;
    display: block;
}
  
.text-box button[class^="read"]::after{
    transition: all 0.35s;
}

.text-box button[class^="read"]:hover::after{
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.35s;
}
.text-box button.read-more::after{
    top: 0;
    bottom: 0;
    left: -100%;
    right: 100%;
}

nav .nav-items .fa-solid{
    display: none;
}

.header nav .fa-solid{
    display: none;
}

@media(max-width: 700px){

    .text-box button{
        font-size: 10px;
        padding: 5px 9px;
    }

    .text-box h2{
        font-size: 30px;
    }

    .text-box p{
        font-size: 15px;
    }

    .nav-items ul li {
        display: block;
    }
    .nav-items {
        position: fixed;
        background: var(--second-color);
        height: 100vh;
        width: 200px;
        top: 0;
        right: -300px;
        text-align: left;
        z-index: 2;
        transition: 1s;
    }
 
    .header nav .fa-solid{
        display: block;
        color: #fff;
        margin: 10px;
        font-size: 22px;
        cursor: pointer;
    }

    nav .nav-items .fa-solid{
        display: block;
        color: #fff;
        margin: 10px;
        font-size: 22px;
        cursor: pointer;
    }

    .nav-items {
        padding: 30px;
    }
}
