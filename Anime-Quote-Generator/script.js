let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let btn = document.querySelector("#generator");

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*animequotes.length)
    quote.innerText = animequotes[random].quote;
    person.innerText = animequotes[random].person;
});

const animequotes = [
    {
        quote: `"All the hatred in the world is gathered on me, as promised. The black knights will have the legend of Zero left behind for them. Schneizel will work for Zero. And now the world can be unified at one table. Mankind can finally embrace the future."`,
        person: `"Lelouch Lamperouge"`
    },
    {
        quote: `"The human heart is the source of all our power. We fight with the power of our hearts."`,
        person: `"Lelouch Lamperouge"`
    },
    {
        quote: `"All men are not created equal! All men are different! Yes, the very existence of man is discriminatory. That's why there is war, violence and unrest."`,
        person: `"Charles ZI Britannia"`
    },
    {
        quote: `"Heroines don't kill people to gain a boy's love. It's evil witches who do that."`,
        person: `"Mao"`
    },
    {
        quote: `"I think being able to openly take away the most important thing people have... 'life'... is the best thing that ever happened!"`,
        person: `"Luciano Bradley"   `
    },
    {
        quote: `"A life that lives without doing anything is the same as a slow death."`,
        person: `"Lelouch Lamperouge"`
    },
    {
        quote: `"Will you let me help you in your quest ensure that no one ever again has to suffer the lost of a loved one on the battlefield?"`,
        person: `"Princess Euphemia"`
    },
    {
        quote: `"Its not that I want an ideal country or great justice or anything complicated like that. I just want to see people smiling."`,
        person: `"Princess Euphemia"`
    },
    {
        quote: `"You're not alone! We're accomplices. If you're a witch, then I can be a warlock"`,
        person: `"Lelouch Lamperouge"`
    },
    {
        quote: `"Do you know the truth of the battlefield? Kill a man normally, and it's considered a crime. But kill many on the battlefield, and you become a hero."`,
        person: `"Luciano Bradley"`
    },
    {
        quote: `"You must think your pretty cool huh, just playing the critic and judging the world from the sidelines."`,
        person: `"Kallen Stadtfeld"`
    },
    {
        quote: `"In this world, evil can arise from the best of intentions. And there is good which can come from evil intentions."`,
        person: `"C.C"`
    },
    {
        quote: `"You can't change the world without getting your hands dirty."`,
        person: `"Lelouch Lamperouge"`
    }
];