function superbowlWin(seasons) {
    for (const banana of seasons) {
        if (banana.result === "W") {
            return banana.year;
        }
    }
}

record.find(superBowlWin)