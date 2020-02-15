var EasyWords= ['Kick', 'Head', 'Sunglasses', 'Mosquito', 'Pinch', 'Chair', 'Jump', 'Elephant', 'Scissors', 'Point', 'Star', 'Tree', 'Airplane', 'Tail', 'Basketball', 'Telephone', 'Mouth', 'Chin', 'Jar', 'Smile', 'Cheek', 'Ear', 'Drum', 'Room', 'Turtle', 'Wings', 'Doll', 'Bird', 'Spider', 'Hopscotch', 'Happy', 'Baby', 'Monkey', 'Pig', 'Crayon', 'Arm', 'Rabbit', 'Book', 'Camera', 'Rock', 'Chicken', 'Robot', 'Drink', 'Balloon', 'Kangaroo', 'Clap', 'Baseball', 'Milk', 'Icecream', 'Circle', 'Sneeze', 'Dog', 'Apple', 'Pen', 'Swing', 'Blinking', 'Door', 'Stop', 'Alligator', 'Dance', 'Skip', 'Football']
var MediumWords= ['Eat', 'Nap', 'Toes', 'Wink', 'Rope', 'Ball', 'Elbow', 'Rollerblade', 'Summer', 'Cow', 'Table tennis', 'Snowball', 'Guitar', 'Alarm', 'Cape', 'Bird', 'Saddle', 'Bike', 'Rain', 'Roof', 'Blind', 'Hoop', 'Violin', 'Frankenstein', 'Stairs', 'Dog', 'String', 'Fetch', 'Cage', 'Mailbox', 'Puppet', 'Penguin', 'Shovel', 'Popcorn', 'Butter', 'Trumpet', 'Haircut', 'Shopping trolley', 'Lipstick', 'Soap', 'Hula', 'Mop', 'Money', 'Food', 'Glue', 'Fang', 'Goldfish', 'Coil', 'Banana', 'Hot', 'See-saw', 'Jellyfish', 'Scarf', 'Tree', 'Seashell', 'Brush', 'Fly', 'Bear', 'Volleyball', 'Banana peel', 'Newspaper', 'Jog', 'Earthquake', 'Piano', 'Think', 'Whisper', 'Yo-yo', 'Hair', 'Twist', 'Beg']
var HardWords= ['Chalk', 'Story', 'Oar', 'Throne', 'Lawn mower', 'Gingerbread', 'Peck', 'Windmill', 'Bobsled', 'Sand', 'Year', 'Stain', 'Vest', 'Swordfish', 'Pizza', 'Softball', 'Party', 'Wrench', 'Spine', 'Beetle', 'Trip', 'Gym', 'Sip', 'Torch', 'Cowboy', 'Carrot', 'Beggar', 'Lung', 'Basket', 'Flamingo', 'Cuff', 'Dryer', 'Blinds', 'Brain', 'Business', 'Eraser', 'Volcano', 'Whisk', 'Funny', 'Quicksand', 'Trap', 'Sheet', 'Small', 'Mouse', 'Poison', 'Washing', 'Marble', 'Nightmare', 'Vegetable', 'Anger', 'Knot', 'Badge', 'Bubble', 'Cramp', 'Doghouse', 'Mirror', 'Doctor', 'Wig', 'Cloth', 'Shadow', 'Chess', 'Stiff', 'Bathroom', 'Sunburn', 'Cast', 'Wax', 'Scale', 'Honey', 'Giraffe', 'Artist', 'Human', 'Huddle', 'Beast', 'Taxi', 'Ticket', 'Cactus', 'Playground', 'Jar', 'Owl', 'Honk']
var VeryHardWords= ['Journal', 'Advertise', 'Personal', 'Jetlag', 'Flag', 'Teenager', 'Invitation', 'Streamline', 'Pendulum', 'Carpenter', 'Shrink', 'Olive oil', 'Boundary', 'Explore', 'Shaft', 'Music', 'Conversation', 'Application', 'Tomato sauce', 'Pompous', 'Police', 'Island', 'Unemployed', 'Faucet', 'Computer monitor', 'Lifestyle', 'Apathy', 'Mozart', 'Portfolio', 'Level', 'Evolution', 'Train', 'Dismantle', 'Lettuce', 'Crumbs', 'Daughter', 'Feather', 'Mitten', 'Award', 'Sandbox', 'Criticize', 'Silhouette', 'Revenge', 'Love', 'Suit', 'Loyalty', 'Satellite', 'Space-time', 'University', 'Sunlight', 'Negotiate', 'Alphabet', 'Hydrant']

function getWordButtons(easy, medium, hard, veryHard){
    easyButton.innerHTML = easy
    mediumButton.innerHTML = medium
    hardButton.innerHTML = hard
    veryHardButton.innerHTML = veryHard

    easyButton.setAttribute('value', easy)
    mediumButton.setAttribute('value', medium)
    hardButton.setAttribute('value', hard)
    veryHardButton.setAttribute('value', veryHard)

}


function generateWords(){
    var word1 = EasyWords[Math.floor(Math.random() * EasyWords.length)]
    var word2 = MediumWords[Math.floor(Math.random() * MediumWords.length)]
    var word3 = HardWords[Math.floor(Math.random() * HardWords.length)]
    var word4 = VeryHardWords[Math.floor(Math.random() * VeryHardWords.length)]
    console.log(word1, word2, word3, word4)
    getWordButtons(word1, word2, word3, word4)
}