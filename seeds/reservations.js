var reservation = require('../models/reservation');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lab_reservation');

var reservations = [
    new reservation({
            hallname: "W002" ,
            date_time: "2018/06/25 10-12",
            reserve_person: "chashika weerathung",
            reason: "book hall 2",
            permissonedby: "Chamath sir",
            is_accepted: true

        }
    ),
    new reservation({
            hallname: "W002" ,
            date_time: "2018/06/25 10-12",
            reserve_person: "chashika weerathung",
            reason: "book hall 2",
            permissonedby: "Chamath sir",
            is_accepted: true

        }
    ),
    new reservation({
            hallname: "W002" ,
            date_time: "2018/06/25 10-12",
            reserve_person: "chashika weerathung",
            reason: "book hall 2",
            permissonedby: "Chamath sir",
            is_accepted: true

        }
    )
];

for(var i=0; 3 > i; i++){
    reservations[i].save();
}

