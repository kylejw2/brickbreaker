export const collisionDetection = (ball, gameObj) => {
    
    const length = gameObj.width;

    const topOfObj = gameObj.position.y;
    const bottomOfObj = gameObj.position.y + gameObj.height;
    const leftOfObj = gameObj.position.x;
    const rightOfObj = gameObj.position.x + gameObj.width;

    const topOfBall = ball.position.y;
    const bottomOfBall = ball.position.y + ball.size;
    const leftOfBall = ball.position.x;
    const rightOfBall = ball.position.x + ball.size;



    // // if the left or right of the object is hit, reverse the x-axis speed
    // if ((rightOfBall >= leftOfObj && rightOfBall <= rightOfObj) && ((topOfBall <= topOfObj && topOfBall >= bottomOfObj) || (bottomOfBall <= topOfObj && bottomOfBall >= bottomOfObj))) {
    //     ball.speed.x = -ball.speed.x;
    // }
    // if ((leftOfBall <= rightOfObj && leftOfBall >= leftOfObj) && ((topOfBall <= topOfObj && topOfBall >= bottomOfObj) || (bottomOfBall <= topOfObj && bottomOfBall >= bottomOfObj))) {
    //     ball.speed.x = -ball.speed.x;
    // }

    // if the bottom of the object is hit, reverse the y-axis speed FIX THIS
    if ((topOfBall <= bottomOfObj && topOfBall >= topOfObj) && ((leftOfBall >= leftOfObj && leftOfBall <= rightOfObj) || (rightOfBall >= leftOfObj && rightOfBall <= rightOfObj))) {
        ball.speed.y = -ball.speed.y;
        return true;
        // gameObj.markedForDeletion = true;
    }

    // if the top of the object is hit, reverse the y-axis speed
    if ((bottomOfBall >= topOfObj && bottomOfBall <= bottomOfObj) && ((leftOfBall >= leftOfObj && leftOfBall <= rightOfObj) || (rightOfBall >= leftOfObj && rightOfBall <= rightOfObj))) {
        ball.speed.y = -ball.speed.y;
        return true;
        // gameObj.markedForDeletion = true;
    }
}