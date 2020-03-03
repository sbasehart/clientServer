var mongoose = require('mongoose'), Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema ({
    routeId: String,
    stopId: String,
    vendorId: String,
    driverId: String,
    itemClaimIds: String,
    itemClaims: any,
    route: any,
    deliverDate: Date,
    teamReferenceId: String,
    routeName: String,
    vendorName: String,
    stopStatus: String,
    stopNo: Number,
    discount: Number,
    extPrice: Number,
    itemPkgId: String,
    itemDesc1: String,
    itemDesc2: String,
    itemSku: String,
    itemType: String,
    cubes: Number,
    orderQty: Number,
    lastOrderQty: Number,
    exceptionQty: Number,
    packageItemSeq: Number,
    price: Number,
    adjustedPrice: Number,
    ratedValue: Number,
    saleType: String,
    itemStatus: String,
    isActive: Boolean,
    serialNumber: String,
    sR: String,
    refusalReason: any,
    pictures: any,
    notes: String,
    isPickupOnly: Boolean,
    isEvenExchange: Boolean,
    stopMileage: Number,
    stopRate: Number,
    stopMileagePremium: Number,
    updatedBy: String,
    updateDate: Date,
    accountName: String,
    isBillable: Boolean,
});


module.exports = mongoose.model('Item', ItemSchema);

