/* GET sample 2 home page */
module.exports.sampleHomeController = function (req, res, next) {
    res.render('samplenav', { title: 'Designers',
        designers: ["Acne","A.P.C.","Bally","Boglioli",
        "Canalli","Cerruti","Coach","Dior",
        "E.Tautz","Etro","E.Zegna","Ferragamo","Gucci",
        "Hermes","Issey Miyake","J.Crew","J.W.Anderson"]
    });
};