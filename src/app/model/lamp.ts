import { DomoticObject } from "./domotic-object";

/**
 * This class represents a Lamp object
 * Extends: DomoticObject class
 */
export class Lamp extends DomoticObject{
    /**
     * Percent of light
     * 0 : light off
     * 100 : max
     */
    public intensity?: Number;

    /**
     * Red Green Blue color
     * 3 numbers between 0 and 255
     */
    public color?: Number[];       //Represents the color of the light : RGB


    /** CONSTRUCTORS */

    constructor(obj: Lamp = {} as Lamp) {
        super();

        let {
            id = 1,
            name = "",
            piece = "",

            intensity = 0,
            color = [255, 255, 255],
        } = obj;

        this.id = id;
        this.name = name;
        this.piece = piece;

        this.intensity = intensity;
        this.color = color;

        if (this.color.length != 3)
            this.color = [255, 255, 255];
        
        if (this.color[0] < 0 || this.color[0] > 255)
            this.color = [255, 255, 255];
        
        if (this.color[1] < 0 || this.color[1] > 255)
            this.color = [255, 255, 255];

        if (this.color[2] < 0 || this.color[2] > 255)
            this.color = [255, 255, 255];
    }

    

}