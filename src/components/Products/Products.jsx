import React from 'react'
import ProductSlider from '../ProductSlider/ProductSlider'
import './Products.css'
import ButtonHover from '../ButtonHover/ButtonHover'

const Products = () => {

    const gelato = [
        {id: 1, name: "COOKIES & CREAM", description: "Whipped cream gelato with cookie swirls, developed exclusively by Lucciano’s in Italy.", url: "gelatos/imgi_59_file-1608320456151", color: "#fdddc7"},
        {id: 2, name: "TIRAMISÚ", description: "WhippInspired by the classic Italian dessert with a super creamy mascarpone cheese. With Lucciano’s exclusive Italian cocoa powder and delicious pieces of vanilla sponge cake dipped in coffee liqueur syrup and Colombian coffee.", url: "gelatos/imgi_60_file-1605795746859", color: "#f8ecd9"},
        {id: 3, name: "PISTACCHIO", description: "A signature flavor made with one of the most precious ingredients of the Sicilian cuisine. A combination of the finest pistacchios in Bronte and Sicily.", url: "gelatos/imgi_61_file-1608320787259", color: "#e1d987"},
        {id: 4, name: "White Chocolate Pistacchio Crock", description: "White chocolate cream gelato with crunchy italian pistacchio marbling.", url: "gelatos/imgi_62_file-1610721356116", color: "#e1d987"},
        {id: 5, name: "LUCCIANO'S CHOCOLATE HAZELNUT", description: "Lucciano’s chocolate with a chocolate and hazelnut filling, developed exclusively by Lucciano’s in Italy.", url: "gelatos/imgi_63_file-1605793992679", color: "#be8671"},
        {id: 6, name: "KING NERO", description: "Hazelnut gelato with hazelnut, chocolate and wafers swirls, exclusively developed for Lucciano’s in Italy.", url: "gelatos/imgi_64_file-1608321231109", color: "#e8ab88"},
        {id: 7, name: "CHOCOTORTA", description: "Inspired by the classic Argentine dessert, creamy milk caramel ice cream with premium milk caramel, cream cheese and semi-sweet chocolate-coated cookie swirls.", url: "gelatos/imgi_65_file-1605795729875", color: "#ffd099"},
        {id: 8, name: "MINT & CHOCOLATE", description: "Original recipe made in Italy for Lucciano’s with fresh mint harvested in Europe and semi-sweet chocolate chips.", url: "gelatos/imgi_66_file-1608320901889", color: "#dcebda"},
        {id: 9, name: "KING BIANCO", description: "Hazelnuts with hazelnut and chocolate swirls, exclusively developed for Lucciano’s in Italy.", url: "gelatos/imgi_14_Kinder-bueno-blanco", color: "#f8ecd9"},
        {id: 10, name: "Homemade Flan", description: "The classic Argentine dessert, brought to the highest quality standards with a recipe of more than 40 years, with hints of caramel.", url: "gelatos/imgi_68_file-1605795856950", color: "#ffd99b"},
        {id: 11, name: "STRAWBERRY AND CREAM", description: "Strawberry and cream ice cream, made with fresh strawberries from the region.", url: "gelatos/imgi_69_file-1605796255511", color: "#fed8d7"},
        {id: 12, name: "STRAWBERRY AND ORANGE", description: "Made with fresh strawberries from our region and some delicious fresh orange juice.", url: "gelatos/imgi_70_file-1605796999756", color: "#ffc1a5"},
        {id: 13, name: "LEMON PIE", description: "We transformed the famous recipe into an incredible ice cream in its honor.", url: "gelatos/imgi_57_file-1605796132277", color: "#ffc1a5"},
        {id: 14, name: "MASCARPONE & BERRIES", description: "Exclusive recipe, made in Italy for Lucciano’s with mascarpone cheese combined with swirls of berries from the Argentine Patagonia.", url: "gelatos/imgi_58_file-1605796102869", color: "#fbccc6"},
    ]

    const icepops = [
        {id: 1, name: "OLI KING", description: "King flavored ice pop, coated with Belgian white chocolate. The paws are decorated with a fine touch of stracciatella.", url: "icepops/imgi_77_file-1605797845032", color: "#f6dfb5"},
        {id: 2, name: "SMILE KING", description: "King flavored ice pop, coated with Belgian white and semi-sweet chocolate. The eyes are made with the same chocolate.", url: "icepops/imgi_78_file-1605797897247", color: "#f1d9b2"},
        {id: 3, name: "PASSION FRUIT CHEESECAKE", description: "Cheesecake icepop with swirls of passion fruit coated with white chocolate.", url: "icepops/imgi_79_file-1640787454037", color: "#FFD652"},
        {id: 4, name: "PISTACCHIO", description: "Pistacchio ice pop, a combination of the finest pistacchios from Bronte and Sicily, coated with a Belgian pistacchio-flavored white chocolate.", url: "icepops/imgi_80_file-1604353935248", color: "#ddd296"},
        {id: 5, name: "TONIO COOKIES & CREAM", description: "Whipped cream ice pop with cookies made in Italy for Lucciano’s and chocolate ganache swirls, coated with white chocolate. All decoration details are made by hand.", url: "icepops/imgi_81_file-1604353829986", color: "#fdd6d7"},
        {id: 6, name: "MINION", description: "King flavored ice pop, coated with Italian white chocolate of Belgian origin, tinted with the classic blue and yellow colors. Handmade eyes are used to add the perfect touch!", url: "icepops/imgi_82_file-1604356660438", color: "#fdd77a"},
        {id: 7, name: "DARK DOUBLE CHOCOLATE", description: "Chocolate gelato, double coated with Belgian white chocolate and milk chocolate, sealed with golden dust., double coated with Belgian white chocolate and milk chocolate, sealed with golden dust.", url: "icepops/imgi_83_file-1640786218937", color: "#987977"},
        {id: 8, name: "WHITE DOUBLE CHOCOLATE", description: "White chocolate with milk chocolate swirls, double coated with Belgian white chocolate and milk chocolate.", url: "icepops/imgi_84_file-1640787008946", color: "#dfc98e"},
        {id: 9, name: "Icepop 0% Added Sugar", description: "Milk chocolate gelato covered with milk chocolate with no added sugar.", url: "icepops/imgi_85_file-1661782732311", color: "#E1BBAB"},
        {id: 10, name: "Money Heist", description: "Caramel gelato, dipped in aurum italian chocolate.", url: "icepops/imgi_86_file-1638546793148", color: "#D8B041"},
        {id: 11, name: "MULTI  FRUIT", description: "Ice pop made with fresh lemon juice and decorated with strawberry, tangerine and kiwi.", url: "icepops/imgi_72_file-1603919700456", color: "#ffbe85"},
        {id: 12, name: "MILK CARAMEL BROWNIE", description: "Ice pop made of premium Argentinian milk caramel with a chocolate brownie swirls, Lucciano's exclusive.", url: "icepops/imgi_75_file-1605797538930", color: "#fabb67"},
        {id: 13, name: "WHIPPED CREAM", description: "Whipped cream ice pop, coated with semi- sweet Belgian chocolate and small pieces of caramelized peanuts.", url: "icepops/imgi_76_file-1604351795340", color: "#f2e7d7"},
    ]

    

  return (
    <>
        <section className='products'>
            <div className='wrapper-header'>
                <div className='items'>
                    <h2 className='title'>
                        <span className='text'>CHECK</span>
                        <span className='text'>OUT OUR</span>
                        <strong className='text'>PRODUCTS<span></span></strong>
                    </h2>
                    <div className='section-box'>
                        <h5>GELATO</h5>
                    </div>
                </div>
            </div>
            <div className='products-carousel'>
                <div className='carousel-container'>
                    <ProductSlider products={gelato} direction='left' />
                </div>
                <div className='section-name-wrapper'>
                    <div className='section-box'>
                        <h5>ICEPOPS</h5>
                    </div>
                </div>
                <div className='carousel-container icepops'>
                    <ProductSlider products={icepops} direction='right'/>
                </div>
                <div className="button-box">
                    <ButtonHover text={'SEE ALL'} />
                </div>
            </div>
        </section>
    </>
  )
}

export default Products