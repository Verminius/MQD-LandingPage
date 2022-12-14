function stateRemoveCluster(dt) {
  if (animationstate == 0) {
    resetRemoved();

    // Mark the tiles as removed
    for (var i = 0; i < cluster.length; i++) {
      // Set the removed flag
      cluster[i].removed = true;
    }

    // Add cluster score
    score += cluster.length * 1;

    // Find floating clusters
    floatingclusters = findFloatingClusters();

    if (floatingclusters.length > 0) {
      // Setup drop animation
      for (var i = 0; i < floatingclusters.length; i++) {
        for (var j = 0; j < floatingclusters[i].length; j++) {
          var tile = floatingclusters[i][j];
          tile.shift = 0;
          tile.shift = 1;
          tile.velocity = player.bubble.dropspeed;

          score += 1;

          localStorage.setItem("mostRecentScore", score);
        }
      }
    }

    animationstate = 1;
  }

  if (animationstate == 1) {
    // Pop bubbles
    var tilesleft = false;
    for (var i = 0; i < cluster.length; i++) {
      var tile = cluster[i];

      if (tile.type >= 0) {
        tilesleft = true;

        // Alpha animation
        tile.alpha -= dt * 15;
        if (tile.alpha < 0) {
          tile.alpha = 0;
        }

        if (tile.alpha == 0) {
          tile.type = -1;
          tile.alpha = 1;
        }
      }
    }

    // Drop bubbles
    for (var i = 0; i < floatingclusters.length; i++) {
      for (var j = 0; j < floatingclusters[i].length; j++) {
        var tile = floatingclusters[i][j];

        if (tile.type >= 0) {
          tilesleft = true;

          // Accelerate dropped tiles
          tile.velocity += dt * 700;
          tile.shift += dt * tile.velocity;

          // Alpha animation
          tile.alpha -= dt * 8;
          if (tile.alpha < 0) {
            tile.alpha = 0;
          }

          // Check if the bubbles are past the bottom of the level
          if (
            tile.alpha == 0 ||
            tile.y * level.rowheight + tile.shift >
              (level.rows - 1) * level.rowheight + level.tileheight
          ) {
            tile.type = -1;
            tile.shift = 0;
            tile.alpha = 1;
          }
        }
      }
    }

    if (!tilesleft) {
      // Next bubble
      nextBubble();

      // Check for game over
      var tilefound = false;
      for (var i = 0; i < level.columns; i++) {
        for (var j = 0; j < level.rows; j++) {
          if (level.tiles[i][j].type != -1) {
            tilefound = true;
            break;
          }
        }
      }

      if (tilefound) {
        setGameState(gamestates.ready);
      } else {
        // No tiles left, game over
        // setGameState(gamestates.gameover);
        setTimeout(() => {
          location.assign("/reaccion-segura/next.html");
        }, 500);
      }
    }
  }
}

function checkGameOver() {
  // Check for game over
  for (var i = 0; i < level.columns; i++) {
    // Check if there are bubbles in the bottom row
    if (level.tiles[i][level.rows - 1].type != -1) {
      // Game over
      nextBubble();
      // setGameState(gamestates.gameover);
      setTimeout(() => {
        location.assign("/reaccion-segura/end.html");
      }, 500);

      return true;
    }
  }

  return false;
}
