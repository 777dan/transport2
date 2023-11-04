function Transport(name) {
    this.name = name;
    // this.about = function () {
    //     console.log(`I'm ${this.name}`);
    // };
}

Transport.prototype.about = function () {
    console.log(`I'm ${this.name}`);
}

function AirTransport(name) {
    this.action = "I'm flying";
    Transport.apply(this, arguments);
}

function WaterTransport(name) {
    this.action = "I'm sailing";
    Transport.apply(this, arguments);
}

function GroundTransport(name) {
    this.action = "I'm moving";
    Transport.apply(this, arguments);
}

const transport = [AirTransport, WaterTransport, GroundTransport];

for (let i = 0; i < transport.length; i++) {
    transport[i].prototype = Object.create(Transport.prototype);
    transport[i].prototype.constructor = transport[i];
    transport[i].prototype.about = function () {
        Transport.prototype.about.apply(this);
        console.log(this.action);
    };
}

const transportObj = [
    new AirTransport('a rocket'),
    new AirTransport('an airplane'),
    new WaterTransport('a motor ship'),
    new WaterTransport('a boat'),
    new GroundTransport('a car'),
    new GroundTransport('a lorry')
];
for (let i = 0; i < transportObj.length; i++) {
    transportObj[i].about();
}