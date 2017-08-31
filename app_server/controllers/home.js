/* GET home page */
/*module.exports.homeController = function (req, res, next) {
    res.render('index', { title: 'yang sample home page' });
};*/
module.exports.styleController = function (req, res, next) {
    res.render('splash12', { });
};
module.exports.jcrewController = function (req, res, next) {
    res.render('jcrew', { });
};
module.exports.fallController = function (req, res, next) {
    res.render('fall17', { });
};

module.exports.springController = function (req, res, next) {
    res.render('spring18', { });
};
module.exports.trendController = function (req, res, next) {
    res.render('trends', { });
};
module.exports.bagController = function (req, res, next) {
    res.render('bags', { });
};
module.exports.shoeController = function (req, res, next) {
    res.render('shoes', { });
};
module.exports.jewelController = function (req, res, next) {
    res.render('jewels', { });
};
/*module.exports.jjjamblesController = function (req, res, next) {
    res.render('jjjambles', { });
};*/
module.exports.jjjamblesController = function (req, res, next) {
    res.render('jjjambles', { });
};
module.exports.acneController = function (req, res, next) {
    res.render('atest', { });
};
/*module.exports.barneysController = function (req, res, next) {
    res.render('barneys', { });
};*/
module.exports.barneysController = function (req, res, next) {
    res.render('brown', { });
};
module.exports.allController = function (req, res, next) {
    res.render('all', { });
};
module.exports.workController = function (req, res, next) {
    res.render('ew15', { });
};
module.exports.joyController = function (req, res, next) {
    res.render('joy', { });
};
module.exports.accountController = function (req, res, next) {
    res.render('gift', { });
};
module.exports.giftController = function (req, res, next) {
    res.render('gift', { });
};
module.exports.mensController = function (req, res, next) {
    res.render('dudes', { title: 'Designers',
        pageHeader: {
            title: "Yang Edit",
            strapline: "Looks from Vogue.com"
        },
        designers: ["Acne","A.P.C.","Bally","Boglioli",
            "Canalli","Cerruti","Coach","Dior",
            "E.Tautz","Etro","E.Zegna","Ferragamo","Gucci",
            "Hermes","Issey Miyake","J.Crew","J.W.Anderson"],
        entries: [{
            name: 'Acne',
            notes: 'Street Sweet',
            looks:["/images/mensrunwayimages/acne14.jpg"]
        },{name: 'A.P.C.',
            notes: 'Fuzzy ',
            looks:["/images/mensrunwayimages/apc1.jpg",
                "/images/mensrunwayimages/apc3.jpg",
                "/images/mensrunwayimages/apc8.jpg"]},
            {name: 'Bally',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/bally1.jpg",
                    "/images/mensrunwayimages/bally2.jpg",
                    "/images/mensrunwayimages/bally15.jpg",
                    "/images/mensrunwayimages/bally16.jpg",
                    "/images/mensrunwayimages/bally17.jpg",
                    "/images/mensrunwayimages/bally18.jpg",
                    "/images/mensrunwayimages/bally19.jpg",
                    "/images/mensrunwayimages/bally23.jpg"]},
            {name: 'Boglioli',
                notes: 'Ciao',
                looks:["/images/mensrunwayimages/boglioli2.jpg",
                    "/images/mensrunwayimages/boglioli17.jpg"]},
            {name: 'Canalli',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/canalli1.jpg",
                    "/images/mensrunwayimages/canalli2.jpg",
                    "/images/mensrunwayimages/canalli6.jpg"]},
            {name: 'Cerruti',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/cerruti5.jpg",
                    "/images/mensrunwayimages/cerruti18.jpg"]},
            {name: 'Coach',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/coach1.jpg",
                    "/images/mensrunwayimages/coach2.jpg",
                    "/images/mensrunwayimages/coach6.jpg",
                    "/images/mensrunwayimages/coach29.jpg"]},
            {name: 'Dior',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/dior41.jpg"]},
            {name: 'E.Tautz',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/etautz25.jpg"]},
            {name: 'Etro',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/etro5.jpg",
                    "/images/mensrunwayimages/etro11.jpg"]},
            {name: 'E.Zegna',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/ezegna2.jpg",
                    "/images/mensrunwayimages/ezegna3.jpg",
                    "/images/mensrunwayimages/ezegna8.jpg"]},
            {name: 'Ferragamo',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/ferragamo1.jpg",
                    "/images/mensrunwayimages/ferragamo3.jpg",
                    "/images/mensrunwayimages/ferragamo4.jpg",
                    "/images/mensrunwayimages/ferragamo5.jpg"]},
            {name: 'Gucci',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/gucci6.jpg",
                    "/images/mensrunwayimages/gucci8.jpg",
                    "/images/mensrunwayimages/gucci10.jpg",
                    "/images/mensrunwayimages/gucci41.jpg"]},
            {name: 'Hermes',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/hermes1.jpg",
                    "/images/mensrunwayimages/hermes2.jpg",
                    "/images/mensrunwayimages/hermes13.jpg",
                    "/images/mensrunwayimages/hermes31.jpg"]},
            {name: 'Issey Miyake',
                notes: 'Very cool very nice',
                looks:["/images/mensrunwayimages/issey16.jpg",
                    "/images/mensrunwayimages/issey19.jpg",
                    "/images/mensrunwayimages/issey20.jpg"]},
            { name: 'J.Crew',
                notes: 'pumpkin dranks',
                looks:["/images/mensrunwayimages/jcrew1.jpg",
                    "/images/mensrunwayimages/jcrew5.jpg",
                    "/images/mensrunwayimages/jcrew6.jpg",
                    "/images/mensrunwayimages/jcrew9.jpg",
                    "/images/mensrunwayimages/jcrew10.jpg",
                    "/images/mensrunwayimages/jcrew11.jpg"]},
            {name: 'J.W.Anderson',
                notes: 'very',
                looks:["/images/mensrunwayimages/jw4.jpg",
                    "/images/mensrunwayimages/jw14.jpg",
                    "/images/mensrunwayimages/jw17.jpg",
                    "/images/mensrunwayimages/jw19.jpg"]}
        ]
    });
};
/*module.exports.homeController = function (req, res, next) {
    res.render('homeFluff', { });
};*/
module.exports.homeController = function (req, res, next) {
    res.render('yangDeux', { });
};

/*module.exports.sampleHomeController = function (req, res, next) {
    res.render('sHomeFluff', { });
};*/
module.exports.shhhController = function (req, res, next) {
    res.render('shh', { });
};