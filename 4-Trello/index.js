const Trello = require('trello');
const api = new Trello("743fbc30bc0891137d7fc72bf44a97a1", "fd0b8563c67cb9a597f51a417fe11323cc59e6497b7e44344274de60e90fffaa");

// Get the IDs of all boards because I don't know them
api.getBoards("jackint0sh").then(console.log);
const boardId = "5da7d313b484480a8a8067c4";

// Get the IDs of all the lists because I don't know them
api.getListsOnBoard(boardId).then(console.log);
const listID = "5da80b4816c9690f536dbf97";

// Get the list of cards on a list
api.getCardsForList(listID, boardId).then(console.log);

// Add a new card to a list
api.addCard("Make stuff right now", "Do what the title says!", listID).then(card => {
    console.log(card.id); // Card ID
    console.log(card.shortUrl); // URL to the card
    console.log(card.labels); // Labels of the card
});
const cardID = "5da81126e4336f30b451ad4e";

// Add labels to board
api.addLabelOnBoard(boardId, "Critical", "red").then(console.log);
const labelID = "5da8127d99e5b8706c984a4a";

// Add label to card
api.addLabelToCard(cardID, labelID);

// Update a card
api.updateCard(cardID, "name", "This changed").then(console.log);
// Can use: api.updateCardName(cardID, "This changed").then(console.log);
api.updateCard(cardID, "desc", "This also changed! OMG!").then(console.log);
// Can use: api.updateCardDescription(cardID, "This also changed! OMG!").then(console.log);

// Delete a card from a list
api.deleteCard(cardID).then(console.log);