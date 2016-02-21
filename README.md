# TreeView SmpL

### Version 0.8

<img src="http://i.imgur.com/G6Ttu6O.png">

## Description

TreeView SmpL is simple Plugin/Script for your HTML pages. You can define folder structures with files via JSON and 
TreeView SmpL displays it as a nice View into your html. You can directly customize the design via Less-CSS or CSS. 
If you want to expand the Script and use it in your own Products, read the Licence-Agreement on the bottom of this 
Document.

## Dependencies

You will need to implement jQuery 1.10.x or 2.10.x (below is not tested)

## How to start?

Implement jQuery first to your HTML File. Now you can implement TreeView.css and TreeView.js like this:

    <head>
        ..
        <link rel="stylesheet" href="css/TreeView.css">
        ..
    </head>
    <body>
        ..
        <script type="text/javascript" src="jquery-min.js"></script>
        <script type="text/javascript" src="js/TreeView.js></script>
    </body>

### JSON Files with tree mapping
Next step is to create a JSON file like this:

    [
      {
        "type": "dir",
        "value": "myFolder"
      },
      {
        "type": "file",
        "value": "myFile.html"
      },
      {
        "type": "dir",
        "value": "styles",
        "children": [
          {
            "type": "dir",
            "value": "css",
            "children": [
              {
                "type": "file",
                "value": "myFile.css"
              }
            ]
          },
          {
            "type": "file",
            "value": "myFile.less",
            "children": [
              {
                "type": "file",
                "value": "myFile.css.map"
              }
            ]
          }
        ]
      }
    ]
    
In this example we have simple Objects in an Array (the surrounding Array is a must have). Every must have a `type` and a
`value` property. And every Object can have a `children` property this is again a Array of Objects. Known types are `dir` 
for Directory and `file` for Filename. The `value` can be what ever you want. In the last File sample you see a File that
has a children too, that is very fine to make mapping visible.

Creating the JSON by hand is not very difficult you see. But i used this simple format to create the JSON files with 
PHP or Java i.e. 

### Start the View in your HTML File

After the JSON is created, by hand or by any other Script/Language you can simply implement the view to your HTML
by creating a new DIV Element. You need to assign the class `tree-view` and a `data-source` attribute with the path
to the JSON with the structure. The path can be relative or absolute or an link to a backend or something like this.

    <head>
        ..
        <link rel="stylesheet" href="css/TreeView.css">
        ..
    </head>
    <body>
        ..
        <div class="tree-view" data-source="../json/test.json"></div>
        ..
        <script type="text/javascript" src="jquery-min.js"></script>
        <script type="text/javascript" src="js/TreeView.js></script>
    </body>
    
Now it is done. You have a simple fine Tree View in your HTML without big trouble.

## Future / TODO

I want to expand the script with several icons for file types and perhaps empty folders. Another thing
i can do in future is to make folders expand/collapse able.

## Licence

Copyright 2016 by Maik Tizziani (mtizziani@gmail.com)

You are not allowed to delete the copyright and licence information if you use TreeView in your own Projects.
If you make changes, give us a Information via E-Mail or on GitHub. Merge requests and issues are welcome every time.

TreeView SmpL is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

TreeView SmpL is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

