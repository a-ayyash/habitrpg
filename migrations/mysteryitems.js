var _id = '';
var update = {
  $push: {
    'purchased.plan.mysteryItems':{
      $each:['head_mystery_201411','weapon_mystery_201411']
    }
  }
};

/*var update = {
  $set:{
    'purchased.plan':{
      customerId: "",
      dateCreated: new Date(),
      dateTerminated: null,
      dateUpdated:new Date(),
      gemsBought: 0,
      mysteryItems: [],
      paymentMethod: "Paypal",
      planId : "basic_earned"
    }
  }
};*/

if (_id) {
  // singular (missing items)
  db.users.update({_id:_id}, update);
} else {
  // multiple (once @ start of event)
  db.users.update({'purchased.plan.customerId':{$ne:null}}, update, {multi:true});
}

