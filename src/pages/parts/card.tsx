import { cardconfig } from '../../components/card/card.ts';
import { Card } from '../../components/card/card.ts';
import { cardPath } from '../../components/card/cardPath.ts';


const cardList: Card[] = [
     {number: 1, mark: "spade", surface: "front", cardPath: cardPath.spades_A},
    {number: 2, mark: "spade", surface: "front", cardPath: cardPath.spades_02},
    {number: 3, mark: "spade", surface: "front", cardPath: cardPath.spades_03},
    {number: 4, mark: "spade", surface: "front", cardPath: cardPath.spades_04},
    {number: 5, mark: "spade", surface: "front", cardPath: cardPath.spades_05},
    {number: 6, mark: "spade", surface: "front", cardPath: cardPath.spades_06},
    {number: 7, mark: "spade", surface: "front", cardPath: cardPath.spades_07},
    {number: 8, mark: "spade", surface: "front", cardPath: cardPath.spades_08},
    {number: 9, mark: "spade", surface: "front", cardPath: cardPath.spades_09},
    {number: 10, mark: "spade", surface: "front", cardPath: cardPath.spades_10},
    {number: 11, mark: "spade", surface: "front", cardPath: cardPath.spades_J},
    {number: 12, mark: "spade", surface: "front", cardPath: cardPath.spades_Q},
    {number: 13, mark: "spade", surface: "front", cardPath: cardPath.spades_K},
    {number: 1, mark: "heart", surface: "front", cardPath: cardPath.hearts_A},
    {number: 2, mark: "heart", surface: "front", cardPath: cardPath.hearts_02},
    {number: 3, mark: "heart", surface: "front", cardPath: cardPath.hearts_03},
    {number: 4, mark: "heart", surface: "front", cardPath: cardPath.hearts_04},
    {number: 5, mark: "heart", surface: "front", cardPath: cardPath.hearts_05},
    {number: 6, mark: "heart", surface: "front", cardPath: cardPath.hearts_06},
    {number: 7, mark: "heart", surface: "front", cardPath: cardPath.hearts_07},
    {number: 8, mark: "heart", surface: "front", cardPath: cardPath.hearts_08},
    {number: 9, mark: "heart", surface: "front", cardPath: cardPath.hearts_09},
    {number: 10, mark: "heart", surface: "front", cardPath: cardPath.hearts_10},
    {number: 11, mark: "heart", surface: "front", cardPath: cardPath.hearts_J},
    {number: 12, mark: "heart", surface: "front", cardPath: cardPath.hearts_Q},
    {number: 13, mark: "heart", surface: "front", cardPath: cardPath.hearts_K},
    {number: 1, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_A},
    {number: 2, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_02},
    {number: 3, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_03},
    {number: 4, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_04},
    {number: 5, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_05},
    {number: 6, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_06},
    {number: 7, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_07},
    {number: 8, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_08},
    {number: 9, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_09},
    {number: 10, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_10},
    {number: 11, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_J},
    {number: 12, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_Q},
    {number: 13, mark: "diamond", surface: "front", cardPath: cardPath.diamonds_K},
    {number: 1, mark: "club", surface: "front", cardPath: cardPath.clubs_A},
    {number: 2, mark: "club", surface: "front", cardPath: cardPath.clubs_02},
    {number: 3, mark: "club", surface: "front", cardPath: cardPath.clubs_03},
    {number: 4, mark: "club", surface: "front", cardPath: cardPath.clubs_04},
    {number: 5, mark: "club", surface: "front", cardPath: cardPath.clubs_05},
    {number: 6, mark: "club", surface: "front", cardPath: cardPath.clubs_06},
    {number: 7, mark: "club", surface: "front", cardPath: cardPath.clubs_07},
    {number: 8, mark: "club", surface: "front", cardPath: cardPath.clubs_08},
    {number: 9, mark: "club", surface: "front", cardPath: cardPath.clubs_09},
    {number: 10, mark: "club", surface: "front", cardPath: cardPath.clubs_10}, 
    {number: 11, mark: "club", surface: "front", cardPath: cardPath.clubs_J},
    {number: 12, mark: "club", surface: "front", cardPath: cardPath.clubs_Q},
    {number: 13, mark: "club", surface: "front", cardPath: cardPath.clubs_K},
];
  
// 52枚のカードリストからランダムに1枚選ぶ
function drawCard(): Card {
    // seedを使って乱数を生成する
    let random = Math.floor(Math.random() * 52);
    // 乱数を使ってカードを選ぶ
    let card = cardList[random];
    return card;
}


function displayCard(card : Card) {
    
    // card.surfaceがfrontなら表、backなら裏を表示する
    if (card.surface === 'front') {
        return (
            <div className="card">
                <img src={card.cardPath} alt={card.number + 'of' + card.mark} 
                width={cardconfig.width} height={cardconfig.height} />
            </div>
        )
    } else {
        return (
            <div className="card">
                <img src={cardPath.back} alt="back" width={cardconfig.width} height={cardconfig.height} />
            </div>
        )
    }
}


export default {drawCard, displayCard};
