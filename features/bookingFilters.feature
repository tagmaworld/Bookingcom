Feature: Booking hotel with sauna facility and 5 star rating
  @booking
  Scenario Outline:  Customer finding hotels with sauna and 5 star rating

    Given user on booking.com website
    When user enters location as <locationName>
    And user selects checkin date
    And user enters day after three months
    And user selects checkout date
    And when user clicks on search
    Then user should be able to see result listings
    When user selects <filter> from side
    Then user should be able to see <hotelname1> in the result listings
    And user should not be able to see <hotelname2> in the result listings
    Examples:
      | locationName | filter | hotelname1            | hotelname2            |
      | Limerick     | 5 star | The Savoy Hotel       | George Limerick Hotel |
      | Limerick     | Sauna  | Limerick Strand Hotel | George Limerick Hotel |
