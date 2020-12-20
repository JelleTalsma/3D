<template>
    <div class="tree">
        <h1>tree</h1>
        <ul id="demo">
            <tree-item
                    class="item"
                    :item="treeData"
                    @make-folder="makeFolder"
                    @add-item="addItem"
            ></tree-item>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import TreeItem from "@/components/TreeItem";
    export default {
        name: "Tree",

        components: {
          TreeItem,
        },

        data() {
            return {
                treeData: {
                    name: "My Tree",
                    children: [
                        {name: "hello"},
                        {name: "wat"},
                        {
                            name: "child folder",
                            children: [
                                {
                                    name: "child folder",
                                    children: [{name: "hello"}, {name: "wat"}]
                                },
                                {name: "hello"},
                                {name: "wat"},
                                {
                                    name: "child folder",
                                    children: [{name: "hello"}, {name: "wat"}]
                                }
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            makeFolder: function(item) {
                Vue.set(item, "children", []);
                this.addItem(item);
            },
            addItem: function(item) {
                item.children.push({
                    name: "new stuff"
                });
            }
        }
    }
</script>

<style>
    body {
        font-family: Menlo, Consolas, monospace;
        color: #444;
    }
    .item {
        cursor: pointer;
    }
    .bold {
        font-weight: bold;
    }
    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }

    .tree {
        padding-top: 20%;
        color: white;
    }
</style>