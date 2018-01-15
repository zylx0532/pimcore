/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */

pimcore.registerNS("pimcore.object.classes.data.email");
pimcore.object.classes.data.email = Class.create(pimcore.object.classes.data.data, {

    type: "input",
    /**
     * define where this datatype is allowed
     */
    allowIn: {
        object: true,
        objectbrick: true,
        fieldcollection: true,
        localizedfield: false,
        classificationstore : false,
        block: true,
        encryptedField: true
    },

    initialize: function (treeNode, initData) {
        this.type = "email";

        if(!initData["name"]) {
            initData = {
                title: t("email")
            };
        }

        initData.fieldtype = "email";
        initData.datatype = "data";
        initData.name = "email";
        treeNode.set("text", "email");

        this.initData(initData);

        this.treeNode = treeNode;
    },

    getTypeName: function () {
        return t("email");
    },

    getGroup: function () {
            return "crm";
    },

    getIconClass: function () {
        return "pimcore_icon_email";
    },

    getLayout: function ($super) {

        $super();

        var specificItems = this.getSpecificPanelItems(this.datax);
        this.specificPanel.add(specificItems);

        return this.layout;
    },

    getSpecificPanelItems: function (datax, inEncryptedField) {

        var specificItems = [
            {
                xtype: "numberfield",
                fieldLabel: t("width"),
                name: "width",
                value: datax.width
            }
        ];

        if (!inEncryptedField) {

            var nameField = this.layout.getComponent("standardSettings").getComponent("name");
            if (nameField) {
                nameField.disable();
            }

            specificItems.push({
                xtype: "numberfield",
                fieldLabel: t("columnlength"),
                name: "columnLength",
                value: datax.columnLength
            });
        }

        return specificItems;
    }

});
