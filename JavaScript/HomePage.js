
//PORTFOLIO BUTTONS
//(imgBtn) create an image button that goes to go to the correct portfoliopage, using object or prototype?

//first try..
/*
let imageButton = document.querySelector('.imgBtn');

imageButton.addEventListener('onclick', function(event){ //go back to login ...not working yet i think
    window.location.replace("#");
    document.location='#' //redirect page to login
})
*/


//second try ...with prototype
/*
function imgBtn(button,page){
this.button=button;
this.page=page;
}

//btn function
imgBtn.prototype.goToPage = function(){
    this.imgBtn.addEventListener('onclick', function(event){
        window.location.replace(this.page);
        document.location=this.page
    })
}*/


//third try ...with class

class imgBtn {
    constructor(button, page) {
        this.button = button;
        this.page = page;
    }
    //btn function
    goToPage() {
        this.imgBtn.addEventListener('onclick', function (event) {
            window.location.replace(this.page);
            event.preventDefault();
        });
    }
}

// all the different buttons (button class, page link)
const imgBtnBibi = new imgBtn('.imgBtnBibi', 'portfolioPages/PortfolioBibi.html');
const imgBtnCP = new imgBtn('.imgBtnCP', 'portfolioPages/PortfolioCP.html');
const imgBtnDorst = new imgBtn('.imgBtnDorst', 'portfolioPages/PortfolioDorst.html');
const imgBtnDrukman = new imgBtn('.imgBtnDrukman', 'portfolioPages/PortfolioDrukman.html');
const imgBtnMultiplied = new imgBtn('.imgBtnMultiplied', 'portfolioPages/PortfolioMultiplied.html');
const imgBtnOutfit = new imgBtn('.imgBtnOutfit', 'portfolioPages/PortfolioOutfitFactory.html');
const imgBtnPatrice = new imgBtn('.imgBtnPatrice', 'portfolioPages/PortfolioPatriceLeseuer.html');
const imgBtnPersonal = new imgBtn('.imgBtnPersonal', 'portfolioPages/PortfolioPersonalDesigns.html');
const imgBtnSilkscreen = new imgBtn('.imgBtnSilkscreen', 'portfolioPages/PortfolioSilkscreenPrinting.html');

//call here
imgBtnBibi.goToPage();
imgBtnCP.goToPage();
imgBtnDorst.goToPage();
imgBtnDrukman.goToPage();
imgBtnMultiplied.goToPage();
imgBtnOutfit.goToPage();
imgBtnPatrice.goToPage();
imgBtnPersonal.goToPage();
imgBtnSilkscreen.goToPage();

/*          
<a href="http://www.museupicasso.bcn.cat/en" target="_blank"> 
<img src="https://media.architecturaldigest.com/photos/5f203e37ece7fbf472dcafb9/master/pass/GettyImages-2674133.jpg"
alt="" width="150px" height="150px" 
alt="a picture of picasso"></a>
*/