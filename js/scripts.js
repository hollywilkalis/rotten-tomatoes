//business logic
function Contact(first, last, email) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.addresses = [];
}

function Address(street, city, state, addressType) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.addressType = addressType;
}

Address.prototype.fullAddress = function() {
  return this.addressType + ": " + this.street + ", " + this.city + ", " + this.state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
    debugger;
    $("#new-addresses").append('<div class="new-address">' +
                               '<div class="form-group">' +
                                 '<label for="new-street">Street</label>' +
                                 '<input type="text" class="form-control new-street">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-city">City</label>' +
                                 '<input type="text" class="form-control new-city">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-state">State</label>' +
                                 '<input type="text" class="form-control new-state">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-address-type">Address type</label>' +
                                 '<input type="text" class="form-control new-address-type">' +
                               '</div>' +
                             '</div>');
                            });

  $("form#contact-info").submit(function(event) {
  event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedEmail = $("input#email").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedNewAddressType = $(this).find("input.new-address-type").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedNewAddressType);
      newContact.addresses.push(newAddress);
    });

    $("ul#contact-list").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first").text(newContact.firstName);
      $(".last").text(newContact.lastName);
      $(".emailaddr").text(newContact.email);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    $("input#first-name").val("");
    $("input#last-name").val("");
    $("input#email").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-address-type").val("");

  });
});
