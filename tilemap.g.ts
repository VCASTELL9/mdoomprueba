// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010100000000000000020000000000000002000000000000000200000000000000020000000000000002000000000000000200000000000000020000000000000002000000000000000200000000000000020000000000000002000000000000000200000000000000020000000000000002000000000000000101020000000201010000000000000000000200000002000000000000000000000002000000020101010200000000000000020000000000000002000000000000000200000000000000020000000000000002010101010101010200000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2 2 2 2 2 2 2 2 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 . . . . . . . 2 . . . . . . . 
2 2 2 . . . 2 2 2 . . . . . . . 
. . 2 . . . 2 . . . . . . . . . 
. . 2 . . . 2 2 2 2 2 . . . . . 
. . 2 . . . . . . . 2 . . . . . 
. . 2 . . . . . . . 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
