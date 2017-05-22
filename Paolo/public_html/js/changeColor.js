/* 
 * Copyright (C) 2017 ponneso & edovio
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function changeColor (id, randomcolor) {
    document.getElementById(id).style.backgroundColor = randomcolor;
    }

function randomColor (color_array) {
    return Math.floor(Math.random() * color_array.length);
}

colors = ["Aqua","Bisque","BurlyWood","Coral","CornflowerBlue","DarkCyan","DarkGoldenRod","DarkGreen","DarkOrange","DarkSalmon","DeepSkyBlue","ForestGreen","Gold","IndianRed","LightGreen","LightSeaGreen","LightSkyBlue","LimeGreen","OliveDrab","Orchid","RoyalBlue","SandyBrown","SpringGreen","YellowGreen"];
id="body";
color_number=randomColor (colors);
changeColor (id, colors[color_number]);