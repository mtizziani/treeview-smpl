/**
 * Copyright 2016 by Maik Tizziani (mtizziani@gmail.com)
 *
 * This file is part of TreeView SmpL.
 *
 * TreeView SmpL is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * TreeView SmpL is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

var TreeView = (function ($) {
    var getTreeNode = function (object) {
        var node = $('<ul>');
        var listNode = $('<li>').html(object.value);
        switch (object.type) {
            case 'dir':
                listNode.addClass('folder');
                break;
            case 'file':
                listNode.addClass('file');
        }
        node.append([
            listNode
        ]);
        if (object.hasOwnProperty('children')) {
            for (var index in object.children) {
                var dataChild = object.children[index];
                $(node).append(getTreeNode(dataChild));
            }
        }
        return node;
    };

    var renderTreeView = function (node, data) {
        for (var index in data) {
            $(node).append(getTreeNode(data[index]));
        }
    };

    var loadTreeViewData = function (node) {
        var treeViewDataLoaded = function (data) {
            renderTreeView(node, data);
        };
        var source = $(node).attr('data-source');
        $.getJSON(source, treeViewDataLoaded);
    };

    /* get the tree-view class nodes as an array */
    var treeViewNodes = $('.tree-view');

    /* iterate the array of nodes */
    for (var i = 0; i < treeViewNodes.length; i++) {
        var node = $(treeViewNodes[i]);
        /* add the TreeView follow line */
        node.append([
            $('<div class="tv-head">').append(
                $("<a>").attr('href', 'https://github.com/mtizziani/treeview-smpl').html("TreeView SmpL on Github")
            )
        ]);
        /* start building the view */
        loadTreeViewData(node);
    }
})($ = jQuery);

TreeView();