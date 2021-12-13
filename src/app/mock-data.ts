export const createForm = {
    "id": "api.form.read",
    "params": {
        "resmsgid": "21e6f3da-8a7c-44cc-a6c0-4703dcc60927",
        "msgid": "cfe90415-9aff-439f-b580-170b9189db85",
        "status": "successful"
    },
    "responseCode": "OK",
    "result": {
        "form": {
            "type": "content",
            "subtype": "textbook",
            "action": "create",
            "component": "*",
            "framework": "tn_k-12_5",
            "data": {
                "templateName": "defaultTemplate",
                "action": "create",
                "fields": [{
                        "code": "name",
                        "dataType": "text",
                        "name": "Name",
                        "label": "Event Name",
                        "description": "Event Name",
                        "editable": true,
                        "placeholder": "Event Name",
                        "inputType": "text",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "class": "sb-g-col-lg-1 required"
                        },
                        "index": 1,
                        "validations": [{
                                "type": "pattern",
                                "value": "^[a-zA-Z0-9 &]*$",
                                "message": "Invalid Input"
                            },
                            {
                                "type": "required",
                                "value": "80",
                                "message": "Enter Event Name"
                            }
                        ]
                    },
                    {
                        "code": "eventType",
                        "dataType": "text",
                        "name": "Event Type",
                        "label": "Event Type",
                        "description": "Type of the event",
                        "editable": true,
                        "default": "Online",
                        "placeholder": "Select Event Type",
                        "inputType": "select",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "range": ["Online", "Offline", "OnlineAndOffline"],
                        "renderingHints": {
                            "semanticColumnWidth": "six"
                        },
                        "index": 4
                    },
                    {
                        "code": "description",
                        "dataType": "text",
                        "name": "Description",
                        "label": "Description",
                        "description": "Event Description",
                        "editable": true,
                        "placeholder": "Description",
                        "inputType": "textarea",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    }, 
                    {
                        "code": "code",
                        "dataType": "text",
                        "name": "Code",
                        "label": "Code",
                        "description": "Code",
                        "editable": true,
                        "placeholder": "Code",
                        "inputType": "text",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "class": "sb-g-col-lg-1 required"
                        },
                        "index": 6,
                        "validations": [{
                                "type": "regex",
                                "value": "^[a-zA-Z0-9]*$",
                                "message": "Invalid Input"
                            },
                            {
                                "type": "required",
                                "value": "80",
                                "message": "Enter Code"
                            }
                        ]
                    }, {
                        "code": "onlineProvider",
                        "dataType": "text",
                        "name": "Online Provider",
                        "label": "Online Provider",
                        "description": "Online Provider",
                        "editable": true,
                        "placeholder": "E.g Zoom",
                        "inputType": "select",
                        "required": false,
                        "displayProperty": "Editable",
                        "range": ["Zoom", "GoToMeeting", "Google Meet", "Jitsi"],
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    }, {
                        "code": "onlineProviderData",
                        "dataType": "text",
                        "name": "Online Provider Data",
                        "label": "Online Provider Data",
                        "description": "Online Provider Data",
                        "editable": true,
                        "placeholder": "https://meetingLink",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    }, {
                        "code": "visibility",
                        "dataType": "text",
                        "name": "Visibility",
                        "label": "Visibility",
                        "description": "Visibility",
                        "editable": true,
                        "placeholder": "Select Visibility",
                        "inputType": "select",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "range": ["Default", "Parent"],
                        "renderingHints": {
                            "semanticColumnWidth": "six"
                        },
                        "index": 4
                    }, {
                        "code": "audience",
                        "dataType": "text",
                        "name": "Audience",
                        "label": "Audience",
                        "description": "Audience",
                        "editable": true,
                        "placeholder": "Select Audience",
                        "inputType": "nestedselect",
                        "default": "",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "range": ["Student", "Teacher", "Administrator"],
                        "renderingHints": {
                            "semanticColumnWidth": "six"
                        },
                        "index": 4
                    },
                    {
                        "code": "language",
                        "dataType": "text",
                        "name": "Language",
                        "label": "Language",
                        "description": "Language",
                        "editable": true,
                        "placeholder": "Select Language",
                        "inputType": "nestedselect",
                        "default": "",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "range": ["English", "Hindi", "Assamese", "Bengali", "Gujarati", "Kannada", "Malayalam", "Marathi", "Nepali", "Odia", "Punjabi", "Tamil", "Telugu", "Urdu", "Sanskrit", "Maithili", "Munda", "Santali", "Juang", "Ho"],
                        "renderingHints": {
                            "semanticColumnWidth": "six"
                        },
                        "index": 4
                    },
                    {
                        "code": "source",
                        "dataType": "text",
                        "name": "source",
                        "label": "Source",
                        "description": "Source",
                        "editable": true,
                        "placeholder": "Source",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    },
                    {
                        "code": "keywords",
                        "visible": true,
                        "editable": true,
                        "dataType": "list",
                        "name": "Keywords",
                        "description": "Keywords for the content",
                        "inputType": "keywords",
                        "label": "keywords",
                        "placeholder": "Enter Keywords",
                        "required": false,
                        "validations": [
                            {
                                "type": "required",
                                "message": "Keyword is required"
                            }
                        ]
                    },
                    {
                        "code": "registrationStartDate",
                        "dataType": "date",
                        "name": "Registration Start Date",
                        "label": "Registration Start Date",
                        "description": "Registration Start Date",
                        "editable": true,
                        "placeholder": "Registration Start Date",
                        "inputType": "date",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "registrationEndDate",
                        "dataType": "date",
                        "name": "Registration End Date",
                        "label": "Registration End Date",
                        "description": "Registration End Date",
                        "editable": true,
                        "placeholder": "Registration End Date",
                        "inputType": "date",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "startDate",
                        "dataType": "date",
                        "name": "Event Start Date",
                        "label": "Event Start Date",
                        "description": "Event Start Date",
                        "editable": true,
                        "placeholder": "Event Start Date",
                        "inputType": "date",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "startTime",
                        "dataType": "time",
                        "name": "Event Start Time",
                        "label": "Event Start Time",
                        "description": "Event Start Time",
                        "editable": true,
                        "placeholder": "Event Start Time",
                        "inputType": "date",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "endDate",
                        "dataType": "date",
                        "name": "Event End Date",
                        "label": "Event End Date",
                        "description": "Event End Date",
                        "editable": true,
                        "placeholder": "Event End Date",
                        "inputType": "date",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "endTime",
                        "dataType": "time",
                        "name": "Event End Time",
                        "label": "Event End Time",
                        "description": "Event End Time",
                        "editable": true,
                        "placeholder": "Event End Time",
                        "inputType": "date",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    }
                ]
            },
            "created_on": "2020-11-12T07:02:44.056Z",
            "last_modified_on": "2020-11-12T07:02:59.202Z",
            "rootOrgId": "01269878797503692810"
        }
    },
    "ts": "2021-02-17T05:33:12.609Z",
    "ver": "1.0"
}

export const eventList = {
    "id": "api.collection.read",
    "ver": "4.0",
    "ts": "2021-02-22T17:46:33Z+05:30",
    "params": {
        "resmsgid": "6d87a213-f6e8-4984-bcd5-b77c282b5873",
        "msgid": null,
        "err": null,
        "status": "successful",
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "content": [
            {   "appIcon": "https://stagsunbirdv38.blob.core.windows.net/content/content/do_2133952906423910401127/artifact/do_2133952906423910401127_1635167315415_book.jfif",
                "venue": {
                    "name": "Kothrud, Pune"
                },
                "code": "45873",
                "registrationStartDate": "2021-03-30",
                "keywords": [
                    "race"
                ],
                "endDate": "2021-12-08",
                "description": "Road bicycle racing is the cycle sport discipline of road cycling, held on paved roads. Road racing is the most popular professional form of bicycle racing, in terms of numbers of competitors, events and spectators. The two most common competition formats are mass start events, where riders start simultaneously (though sometimes with a handicap) and race to set finish point; and time trials, where individual riders or teams race a course alone against the clock. Stage races or \"tours\" take multiple days, and consist of several mass-start or time-trial stages ridden consecutively.",
                "language": [
                    "English"
                ],
                "source": "erew",
                "createdOn": "2021-03-30T06:27:14.848+0000",
                "objectType": "Event",
                "registrationEndDate": "2021-04-06",
                "lastUpdatedOn": "2021-03-30T06:27:14.848+0000",
                "startTime": "12:53:52+05:30",
                "contentType": "Event",
                "trackable": {
                    "enabled": "Yes",
                    "autoBatch": "Yes"
                },
                "onlineProviderData": {
                    "meetingLink": "https://meet1.google.com/evf-ofoy-jra"
                },
                "identifier": "do_113348419156893696136",
                "lastStatusChangedOn": "2021-03-30T06:27:14.848+0000",
                "createdFor": [
                    "teacher"
                ],
                "audience": [
                    "Teacher"
                ],
                "visibility": "Parent",
                "consumerId": "9a1039b0-7159-4e55-b4e6-19ce338d21e9",
                "eventType": "Online",
                "languageCode": [
                    "en"
                ],
                "version": 2,
                "versionKey": "1617085634848",
                "leafNodesCount": 1,
                "name": "Road bicycle racing",
                "endTime": "13:53:52+05:30",
                "startDate": "202130",
                "status": "Draft"
            },
            {
                "appIcon": "https://stagsunbirdv38.blob.core.windows.net/content/content/do_2133952906423910401127/artifact/do_2133952906423910401127_1635167315415_book.jfif",
                "venue": {
                    "name": "Piazzale 12 Ottobre 1492, Rome, Metropolitan City of Rome, Italy\n"
                },
                "code": "768",
                "registrationStartDate": "2021-03-30",
                "endDate": "2021-09-11",
                "description": "So you love cooking and you are a big foodie. Be it your favorite pasta, pizza to Indian food like Pani Puri, some lip-smacking delicacies await you. Come, join us and be a part of the annual Rome food festival. This event has received large support from the Indian community in Rome and hence Indian food is a major part of this food festival.\n\n",
                "language": [
                    "English"
                ],
                "source": "324",
                "createdOn": "2021-03-30T13:07:55.179+0000",
                "objectType": "Event",
                "registrationEndDate": "2021-04-02",
                "lastUpdatedOn": "2021-03-30T13:07:55.179+0000",
                "startTime": "19:35:56+05:30",
                "contentType": "Event",
                "trackable": {
                    "enabled": "Yes",
                    "autoBatch": "Yes"
                },
                "onlineProviderData": {
                    "meetingLink": "https://jitsifood.com"
                },
                "identifier": "do_113348418597380096135",
                "lastStatusChangedOn": "2021-03-30T13:07:55.179+0000",
                "createdFor": [
                    "yui"
                ],
                "audience": [
                    "Teacher"
                ],
                "visibility": "Default",
                "consumerId": "9a1039b0-7159-4e55-b4e6-19ce338d21e9",
                "onlineProvider": "Jitsi",
                "eventType": "Offline",
                "languageCode": [
                    "en"
                ],
                "version": 2,
                "versionKey": "1617109675179",
                "leafNodesCount": 1,
                "name": "Rome food festival",
                "endTime": "20:35:56+05:30",
                "startDate": "2021-09-08",
                "status": "Draft"
            },
            {
                "appIcon": "https://stagsunbirdv38.blob.core.windows.net/content/content/do_2133952906423910401127/artifact/do_2133952906423910401127_1635167315415_book.jfif",
                "venue": {
                    "name": "Kothrud,Pune, 412202"
                },
                "code": "435",
                "registrationStartDate": "2021-04-08",
                "endDate": "2021-04-14",
                "description": "Attend our workshop on the basics of stock market.\n\n",
                "language": [
                    "Marathi"
                ],
                "createdOn": "2021-03-30T13:11:05.806+0000",
                "objectType": "Event",
                "registrationEndDate": "2021-04-11",
                "lastUpdatedOn": "2021-03-30T13:11:05.806+0000",
                "startTime": "19:39:16+05:30",
                "contentType": "Event",
                "trackable": {
                    "enabled": "Yes",
                    "autoBatch": "Yes"
                },
                "onlineProviderData": {
                    "meetingLink": "http://googlemeet"
                },
                "identifier": "do_1132473640206745601418",
                "lastStatusChangedOn": "2021-03-30T13:11:05.806+0000",
                "createdFor": [
                    "1231"
                ],
                "audience": [
                    "Student"
                ],
                "visibility": "Default",
                "consumerId": "9a1039b0-7159-4e55-b4e6-19ce338d21e9",
                "onlineProvider": "Google Meet",
                "eventType": "OnlineAndOffline",
                "languageCode": [
                    "mr"
                ],
                "version": 2,
                "versionKey": "1617109865806",
                "leafNodesCount": 1,
                "name": "Workshop on Stock Market for Beginners",
                "endTime": "20:39:16+05:30",
                "startDate": "2021-03-30",
                "status": "Draft"
            },
            {
                "appIcon": "https://stagsunbirdv38.blob.core.windows.net/content/content/do_2133952906423910401127/artifact/do_2133952906423910401127_1635167315415_book.jfif",
                "venue": {
                    "name": "Swati Building, North Avenue Road, Santacruz West, Mumbai, Maharashtra, India"
                },
                "code": "234",
                "registrationStartDate": "2021-03-31",
                "endDate": "2021-04-11",
                "description": "Mumbai, the city of dreams is synonymous with Bollywood. Bollywood is one of the biggest film industies across the globe.So, no better place other than \"Aamchi Mumbai\"(Our Mumbai) to host an event of such a big magnitude. Global film festival previews 200 films from 50 countries from a variety of genres. Also, you will get a chance to see all your favourite celebrities in person. Please do grace the occasion with your presence.",
                "language": [
                    "Sanskrit"
                ],
                "source": "234243",
                "createdOn": "2021-03-30T13:04:22.719+0000",
                "objectType": "Event",
                "registrationEndDate": "2021-04-10",
                "lastUpdatedOn": "2021-03-30T13:04:22.719+0000",
                "startTime": "19:28:15+05:30",
                "contentType": "Event",
                "trackable": {
                    "enabled": "Yes",
                    "autoBatch": "Yes"
                },
                "onlineProviderData": {
                    "meetingLink": "https://zoomfilm"
                },
                "identifier": "do_1132473607185858561397",
                "lastStatusChangedOn": "2021-03-30T13:04:22.719+0000",
                "createdFor": [
                    "any one"
                ],
                "audience": [
                    "Teacher"
                ],
                "visibility": "Default",
                "consumerId": "9a1039b0-7159-4e55-b4e6-19ce338d21e9",
                "onlineProvider": "Zoom",
                "eventType": "Online",
                "languageCode": [
                    ""
                ],
                "version": 2,
                "versionKey": "1617109462719",
                "leafNodesCount": 1,
                "name": "Global film festival in Mumbai",
                "endTime": "20:28:15+05:30",
                "startDate": "2021-03-31",
                "status": "Draft",
                "owner" : "1001"

            },
            { 
                "appIcon": "https://stagsunbirdv38.blob.core.windows.net/content/content/do_2133952906423910401127/artifact/do_2133952906423910401127_1635167315415_book.jfif",
                "venue": {
                    "name": "Kothrud, Pune"
                },
                "code": "45873",
                "registrationStartDate": "2021-03-30",
                "keywords": [
                    "race"
                ],
                "endDate": "2021-04-08",
                "description": "Road bicycle racing is the cycle sport discipline of road cycling, held on paved roads. Road racing is the most popular professional form of bicycle racing, in terms of numbers of competitors, events and spectators. The two most common competition formats are mass start events, where riders start simultaneously (though sometimes with a handicap) and race to set finish point; and time trials, where individual riders or teams race a course alone against the clock. Stage races or \"tours\" take multiple days, and consist of several mass-start or time-trial stages ridden consecutively.",
                "language": [
                    "English"
                ],
                "source": "erew",
                "createdOn": "2021-03-30T06:27:14.848+0000",
                "objectType": "Event",
                "regist[object Object]rationEndDate": "2021-04-06",
                "lastUpdatedOn": "2021-03-30T06:27:14.848+0000",
                "startTime": "12:53:52+05:30",
                "contentType": "Event",
                "trackable": {
                    "enabled": "Yes",
                    "autoBatch": "Yes"
                },
                "onlineProviderData": {
                    "meetingLink": "http Venue: Kothrud, Pune s://meet1.google.com/evf-ofoy-jra"
                },
                "identifier": "do_1132471655206666241281",
                "lastStatusChangedOn": "2021-03-30T06:27:14.848+0000",
                "createdFor": [
                    "teacher"
                ],
                "audience": [
                    "Teacher"
                ],
                "visibility": "Parent",
                "consumerId": "9a1039b0-7159-4e55-b4e6-19ce338d21e9",
                "eventType": "Online",
                "languageCode": [
                    "en"
                ],
                "version": 2,
                "versionKey": "1617085634848",
                "leafNodesCount": 1,
                "name": "Road bicycle racing 2",
                "endTime": "13:53:52+05:30",
                "startDate": "2021-03-30",
                "status": "Draft",
                "owner" : "1001"
            },
            {
                "appIcon": "https://stagsunbirdv38.blob.core.windows.net/content/content/do_2133952906423910401127/artifact/do_2133952906423910401127_1635167315415_book.jfif",
                "venue": {
                    "name": "Piazzale 12 Ottobre 1492, Rome, Metropolitan City of Rome, Italy\n"
                },
                "code": "768",
                "registrationStartDate": "2021-03-30",
                "endDate": "2021-04-11",
                "description": "So you love cooking and you are a big foodie. Be it your favorite pasta, pizza to Indian food like Pani Puri, some lip-smacking delicacies await you. Come, join us and be a part of the annual Rome food festival. This event has received large support from the Indian community in Rome and hence Indian food is a major part of this food festival.\n\n",
                "language": [
                    "English"
                ],
                "source": "324",
                "createdOn": "2021-03-30T13:07:55.179+0000",
                "objectType": "Event",
                "registrationEndDate": "2021-04-02",
                "lastUpdatedOn": "2021-03-30T13:07:55.179+0000",
                "startTime": "19:35:56+05:30",
                "contentType": "Event",
                "trackable": {
                    "enabled": "Yes",
                    "autoBatch": "Yes"
                },
                "onlineProviderData": {
                    "meetingLink": "https://jitsifood.com"
                },
                "identifier": "do_1132473624589598721411",
                "lastStatusChangedOn": "2021-03-30T13:07:55.179+0000",
                "createdFor": [
                    "yui"
                ],
                "audience": [
                    "Teacher", "Student"
                ],
                "visibility": "Default",
                "consumerId": "9a1039b0-7159-4e55-b4e6-19ce338d21e9",
                "onlineProvider": "Jitsi",
                "eventType": "Offline",
                "languageCode": [
                    "en"
                ],
                "version": 2,
                "versionKey": "1617109675179",
                "leafNodesCount": 1,
                "name": "Rome food festival",
                "endTime": "20:35:56+05:30",
                "startDate": "2021-03-30",
                "status": "Draft"
            },
            {
                "appIcon": "https://stagsunbirdv38.blob.core.windows.net/content/content/do_2133952906423910401127/artifact/do_2133952906423910401127_1635167315415_book.jfif",
                "venue": {
                    "name": "Kothrud,Pune, 412202"
                },
                "code": "435",
                "registrationStartDate": "2021-04-08",
                "endDate": "2021-04-14",
                "description": "Attend our workshop on the basics of stock market.\n\n",
                "language": [
                    "Marathi"
                ],
                "createdOn": "2021-03-30T13:11:05.806+0000",
                "objectType": "Event",
                "registrationEndDate": "2021-04-11",
                "lastUpdatedOn": "2021-03-30T13:11:05.806+0000",
                "startTime": "19:39:16+05:30",
                "contentType": "Event",
                "trackable": {
                    "enabled": "Yes",
                    "autoBatch": "Yes"
                },
                "onlineProviderData": {
                    "meetingLink": "http://googlemeet"
                },
                "identifier": "do_1132473640206745601418",
                "lastStatusChangedOn": "2021-03-30T13:11:05.806+0000",
                "createdFor": [
                    "1231"
                ],
                "audience": [
                    "Student"
                ],
                "visibility": "Default",
                "consumerId": "9a1039b0-7159-4e55-b4e6-19ce338d21e9",
                "onlineProvider": "Google Meet",
                "eventType": "OnlineAndOffline",
                "languageCode": [
                    "mr"
                ],
                "version": 2,
                "versionKey": "1617109865806",
                "leafNodesCount": 1,
                "name": "Workshop on Stock Market for Beginners",
                "endTime": "20:39:16+05:30",
                "startDate": "2021-03-30",
                "status": "Draft"
            },
            {
                "appIcon": "https://stagsunbirdv38.blob.core.windows.net/content/content/do_2133952906423910401127/artifact/do_2133952906423910401127_1635167315415_book.jfif",
                "venue": {
                    "name": "Swati Building, North Avenue Road, Santacruz West, Mumbai, Maharashtra, India"
                },
                "code": "234",
                "registrationStartDate": "2021-03-31",
                "endDate": "2021-04-11",
                "description": "Mumbai, the city of dreams is synonymous with Bollywood. Bollywood is one of the biggest film industies across the globe.So, no better place other than \"Aamchi Mumbai\"(Our Mumbai) to host an event of such a big magnitude. Global film festival previews 200 films from 50 countries from a variety of genres. Also, you will get a chance to see all your favourite celebrities in person. Please do grace the occasion with your presence.",
                "language": [
                    "Sanskrit"
                ],
                "source": "234243",
                "createdOn": "2021-03-30T13:04:22.719+0000",
                "objectType": "Event",
                "registrationEndDate": "2021-04-10",
                "lastUpdatedOn": "2021-03-30T13:04:22.719+0000",
                "startTime": "19:28:15+05:30",
                "contentType": "Event",
                "trackable": {
                    "enabled": "Yes",
                    "autoBatch": "Yes"
                },
                "onlineProviderData": {
                    "meetingLink": "https://zoomfilm"
                },
                "identifier": "do_1132473607185858561397",
                "lastStatusChangedOn": "2021-03-30T13:04:22.719+0000",
                "createdFor": [
                    "any one"
                ],
                "audience": [
                    "Teacher"
                ],
                "visibility": "Default",
                "consumerId": "9a1039b0-7159-4e55-b4e6-19ce338d21e9",
                "onlineProvider": "Zoom",
                "eventType": "Online",
                "languageCode": [
                    ""
                ],
                "version": 2,
                "versionKey": "1617109462719",
                "leafNodesCount": 1,
                "name": "Global film festival in Mumbai",
                "endTime": "20:28:15+05:30",
                "startDate": "2021-03-31",
                "status": "Draft"
            }
        ]
    }
}
export const enrollList = {
    "id": "api.user.event.list",
    "ver": "v1",
    "ts": "2021-02-22 12:09:53:965+0530",
    "params": {
        "resmsgid": null,
        "msgid": "2f274490-3215-4ee8-b6e4-5f96bb2383d5",
        "err": null,
        "status": "success",
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "content": [{
                "dateTime": 1613972575662,
                "lastReadContentStatus": null,
                "enrolledDate": "2020-11-23 07:02:43:194+0000",
                "addedBy": "04b5b73b-c647-44f9-9e16-1fbd1fcc696e",
                "contentId": "do_11322166143296307218",
                "active": true,
                "description": null,
                "courseLogoUrl": null,
                "batchId": "event_batch_id-do_11322166143296307218",
                "userId": "1",
                "content": {},
                "userDetail": {},
                "contentStatus": {},
                "completionPercentage": null,
                "issuedCertificates": [],
                "courseName": null,
                "certificates": [],
                "completedOn": "2021-03-07 08:10:04.459000+0000",
                "leafNodesCount": null,
                "progress": 0,
                "certstatus": null,
                "lastReadContentId": null,
                "courseId": "do_11322166143296307218",
                "collectionId": "do_11322166143296307218",
                "status": 2
            },
            {
                "dateTime": 1613972575662,
                "lastReadContentStatus": null,
                "enrolledDate": "2021-02-23 09:02:43:194+0000",
                "addedBy": "04b5b73b-c647-44f9-9e16-1fbd1fcc696e",
                "contentId": "do_11322166143296307218",
                "active": true,
                "description": null,
                "courseLogoUrl": null,
                "batchId": "event_batch_id-do_11322166143296307218",
                "userId": "2",
                "content": {},
                "contentStatus": {},
                "completionPercentage": null,
                "issuedCertificates": [],
                "courseName": null,
                "certificates": [],
                "completedOn": "2021-03-02 08:10:04.459000+0000",
                "leafNodesCount": null,
                "progress": 0,
                "certstatus": null,
                "lastReadContentId": null,
                "courseId": "do_11322166143296307218",
                "collectionId": "do_11322166143296307218",
                "status": 0
            },
            {
                "dateTime": 1613972575662,
                "lastReadContentStatus": null,
                "enrolledDate": "2020-11-23 07:02:43:194+0000",
                "addedBy": "04b5b73b-c647-44f9-9e16-1fbd1fcc696e",
                "contentId": "do_11322166143296307218",
                "active": true,
                "description": null,
                "courseLogoUrl": null,
                "batchId": "event_batch_id-do_11322166143296307218",
                "userId": "3",
                "content": {},
                "contentStatus": {},
                "completionPercentage": null,
                "issuedCertificates": [],
                "courseName": null,
                "certificates": [],
                "completedOn": "2021-03-12 08:10:04.459000+0000",
                "leafNodesCount": null,
                "progress": 0,
                "certstatus": null,
                "lastReadContentId": null,
                "courseId": "do_11322166143296307218",
                "collectionId": "do_11322166143296307218",
                "status": 2
            },
            {
                "dateTime": 1613972575662,
                "lastReadContentStatus": null,
                "enrolledDate": "2020-11-23 07:02:43:194+0000",
                "addedBy": "04b5b73b-c647-44f9-9e16-1fbd1fcc696e",
                "contentId": "do_11322166143296307218",
                "active": true,
                "description": null,
                "courseLogoUrl": null,
                "batchId": "event_batch_id-do_11322166143296307218",
                "userId": "4",
                "content": {},
                "contentStatus": {},
                "completionPercentage": null,
                "issuedCertificates": [],
                "courseName": null,
                "certificates": [],
                "completedOn": "2021-03-22 08:10:04.459000+0000",
                "leafNodesCount": null,
                "progress": 0,
                "certstatus": null,
                "lastReadContentId": null,
                "courseId": "do_11322166143296307218",
                "collectionId": "do_11322166143296307218",
                "status": 2
            },
            {
                "dateTime": 1613972575662,
                "lastReadContentStatus": null,
                "enrolledDate": "2021-05-11 07:02:43:194+0000",
                "addedBy": "04b5b73b-c647-44f9-9e16-1fbd1fcc696e",
                "contentId": "do_11322166143296307218",
                "active": true,
                "description": null,
                "courseLogoUrl": null,
                "batchId": "event_batch_id-do_11322166143296307218",
                "userId": "6",
                "content": {},
                "contentStatus": {},
                "completionPercentage": null,
                "issuedCertificates": [],
                "courseName": null,
                "certificates": [],
                "completedOn": "2021-03-22 08:10:04.459000+0000",
                "leafNodesCount": null,
                "progress": 0,
                "certstatus": null,
                "lastReadContentId": null,
                "courseId": "do_11322166143296307218",
                "collectionId": "do_11322166143296307218",
                "status": 0
            },
            {
                "dateTime": 1613972575662,
                "lastReadContentStatus": null,
                "enrolledDate": "2021-05-11 07:02:43:194+0000",
                "addedBy": "04b5b73b-c647-44f9-9e16-1fbd1fcc696e",
                "contentId": "do_11322166143296307218",
                "active": true,
                "description": null,
                "courseLogoUrl": null,
                "batchId": "event_batch_id-do_11322166143296307218",
                "userId": "6",
                "content": {},
                "contentStatus": {},
                "completionPercentage": null,
                "issuedCertificates": [],
                "courseName": null,
                "certificates": [],
                "completedOn": "2021-03-22 08:10:04.459000+0000",
                "leafNodesCount": null,
                "progress": 0,
                "certstatus": null,
                "lastReadContentId": null,
                "courseId": "do_11322166143296307218",
                "collectionId": "do_11322166143296307218",
                "status": 0
            },
            {
                "dateTime": 1613972575662,
                "lastReadContentStatus": null,
                "enrolledDate": "2021-05-11 07:02:43:194+0000",
                "addedBy": "04b5b73b-c647-44f9-9e16-1fbd1fcc696e",
                "contentId": "do_11322166143296307218",
                "active": true,
                "description": null,
                "courseLogoUrl": null,
                "batchId": "event_batch_id-do_11322166143296307218",
                "userId": "6",
                "content": {},
                "contentStatus": {},
                "completionPercentage": null,
                "issuedCertificates": [],
                "courseName": null,
                "certificates": [],
                "completedOn": "2021-03-22 08:10:04.459000+0000",
                "leafNodesCount": null,
                "progress": 0,
                "certstatus": null,
                "lastReadContentId": null,
                "courseId": "do_11322166143296307218",
                "collectionId": "do_11322166143296307218",
                "status": 0
            },
            {
                "dateTime": 1613972575662,
                "lastReadContentStatus": null,
                "enrolledDate": "2021-08-19 07:02:43:194+0000",
                "addedBy": "04b5b73b-c647-44f9-9e16-1fbd1fcc696e",
                "contentId": "do_113347821989765120155",
                "active": true,
                "description": null,
                "courseLogoUrl": null,
                "batchId": "event_batch_id-do_113347821989765120155",
                "userId": "999",
                "content": {},
                "contentStatus": {},
                "completionPercentage": null,
                "issuedCertificates": [],
                "courseName": null,
                "certificates": [],
                "completedOn": "2021-08-22 08:10:04.459000+0000",
                "leafNodesCount": null,
                "progress": 0,
                "certstatus": null,
                "lastReadContentId": null,
                "courseId": "do_113347821989765120155",
                "collectionId": "do_113347821989765120155",
                "status": 0
            }
        ]
    }
}

export const userList = {
    "id": "api.user.read",
    "ver": "v1",
    "ts": "2020-11-23 13:21:57:692+0000",
    "params": {
      "resmsgid": null,
      "msgid": "af801330-0dcb-42c6-b76b-cedaa6212118",
      "err": null,
      "status": "success",
      "errmsg": null
    },
    "responseCode": "OK",
    "result": {
      "response": [{
          "webPages": [],
          "tcStatus": null,
          "maskedPhone": null,
          "rootOrgName": "org3",
          "subject": [],
          "channel": "channel1",
          "language": [],
          "updatedDate": null,
          "managedBy": null,
          "flagsValue": 2,
          "id": "1",
          "recoveryEmail": "",
          "identifier": "1",
          "thumbnail": null,
          "updatedBy": null,
          "accesscode": null,
          "locationIds": [],
          "registryId": null,
          "rootOrgId": "0126796199493140480",
          "prevUsedEmail": "",
          "firstname": "Pranay",
          "tncAcceptedOn": null,
          "allTncAccepted": {},
          "phone": "",
          "dob": null,
          "grade": [],
          "currentLoginTime": null,
          "userType": "TEACHER",
          "userSubType": null,
          "status": 1,
          "lastname": "Raman",
          "tncLatestVersion": "v8",
          "gender": null,
          "roles": [
              "PUBLIC"
          ],
          "prevUsedPhone": "",
          "stateValidated": false,
          "isDeleted": false,
          "organisations": [
              {
              "updatedBy": null,
              "organisationId": "0126796199493140480",
              "orgName": "org3",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "PUBLIC"
              ],
              "approvedBy": null,
              "isSelfDeclared": true,
              "updatedDate": null,
              "userId": "1",
              "approvaldate": null,
              "associationtype": 2,
              "isSystemUpload": false,
              "isDeleted": false,
              "hashTagId": "0126796199493140480",
              "isSSO": false,
              "isRejected": null,
              "position": null,
              "id": 3157455573689335,
              "orgjoindate": "2020-11-23 07:02:43:194+0000",
              "isApproved": null,
              "orgLeftDate": null
              }
          ],
          "provider": null,
          "countryCode": null,
          "tncLatestVersionUrl": "https://organisation.blob.core.windows.net/termsandcond/terms-and-conditions-v8.html",
          "maskedEmail": "se*************@yopmail.com",
          "tempPassword": null,
          "email": "pranayInfo02@yopmail.com",
          "rootOrg": {
              "dateTime": null,
              "preferredLanguage": null,
              "keys": {
              "encKeys": [
                  456
              ],
              "signKeys": [
                  456
              ]
              },
              "channel": "channel1",
              "approvedBy": null,
              "description": "org3",
              "updatedDate": "2020-08-28 10:12:01:096+0000",
              "addressId": null,
              "orgType": null,
              "provider": null,
              "orgCode": null,
              "locationId": null,
              "theme": null,
              "id": "0126796199493140480",
              "isApproved": null,
              "communityId": null,
              "slug": "channel1",
              "email": null,
              "isSSOEnabled": null,
              "thumbnail": null,
              "updatedBy": null,
              "orgName": "org3",
              "locationIds": [
              "027f81d8-0a2c-4fc6-96ac-59fe4cea3abf",
              "8250d58d-f1a2-4397-bfd3-b2e688ba7141"
              ],
              "externalId": null,
              "isRootOrg": true,
              "rootOrgId": "0126796199493140480",
              "imgUrl": null,
              "approvedDate": null,
              "orgTypeId": null,
              "homeUrl": null,
              "isDefault": true,
              "createdDate": "2019-01-18 09:48:13:428+0000",
              "contactDetail": null,
              "parentOrgId": null,
              "createdBy": "system",
              "hashTagId": "0126796199493140480",
              "noOfMembers": null,
              "status": 1
          },
          "profileSummary": null,
          "phoneVerified": false,
          "tcUpdatedDate": null,
          "recoveryPhone": "",
          "avatar": null,
          "userName": "username1",
          "promptTnC": true,
          "lastLoginTime": null,
          "emailVerified": true,
          "framework": {},
          "createdDate": "2020-11-23 07:02:36:155+0000",
          "createdBy": null,
          "location": null,
          "tncAcceptedVersion": null
          },
          {
          "webPages": [],
          "tcStatus": null,
          "maskedPhone": null,
          "rootOrgName": "org3",
          "subject": [],
          "channel": "channel1",
          "language": [],
          "updatedDate": null,
          "managedBy": null,
          "flagsValue": 2,
          "id": "2",
          "recoveryEmail": "",
          "identifier": "2",
          "thumbnail": null,
          "updatedBy": null,
          "accesscode": null,
          "locationIds": [],
          "registryId": null,
          "rootOrgId": "0126796199493140480",
          "prevUsedEmail": "",
          "firstname": "Vineet",
          "tncAcceptedOn": null,
          "allTncAccepted": {},
          "phone": "",
          "dob": null,
          "grade": [],
          "currentLoginTime": null,
          "userType": "TEACHER",
          "userSubType": null,
          "status": 1,
          "lastname": "Poduri",
          "tncLatestVersion": "v8",
          "gender": null,
          "roles": [
              "PUBLIC"
          ],
          "prevUsedPhone": "",
          "stateValidated": false,
          "isDeleted": false,
          "organisations": [
              {
              "updatedBy": null,
              "organisationId": "0126796199493140480",
              "orgName": "org3",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "PUBLIC"
              ],
              "approvedBy": null,
              "isSelfDeclared": true,
              "updatedDate": null,
              "userId": "2",
              "approvaldate": null,
              "associationtype": 2,
              "isSystemUpload": false,
              "isDeleted": false,
              "hashTagId": "0126796199493140480",
              "isSSO": false,
              "isRejected": null,
              "position": null,
              "id": 3157455573689335,
              "orgjoindate": "2020-11-23 07:02:43:194+0000",
              "isApproved": null,
              "orgLeftDate": null
              }
          ],
          "provider": null,
          "countryCode": null,
          "tncLatestVersionUrl": "https://organisation.blob.core.windows.net/termsandcond/terms-and-conditions-v8.html",
          "maskedEmail": "se*************@yopmail.com",
          "tempPassword": null,
          "email": "vinitNew88@yopmail.com",
          "rootOrg": {
              "dateTime": null,
              "preferredLanguage": null,
              "keys": {
              "encKeys": [
                  456
              ],
              "signKeys": [
                  456
              ]
              },
              "channel": "channel1",
              "approvedBy": null,
              "description": "org3",
              "updatedDate": "2020-08-28 10:12:01:096+0000",
              "addressId": null,
              "orgType": null,
              "provider": null,
              "orgCode": null,
              "locationId": null,
              "theme": null,
              "id": "0126796199493140480",
              "isApproved": null,
              "communityId": null,
              "slug": "channel1",
              "email": null,
              "isSSOEnabled": null,
              "thumbnail": null,
              "updatedBy": null,
              "orgName": "org3",
              "locationIds": [
              "027f81d8-0a2c-4fc6-96ac-59fe4cea3abf",
              "8250d58d-f1a2-4397-bfd3-b2e688ba7141"
              ],
              "externalId": null,
              "isRootOrg": true,
              "rootOrgId": "0126796199493140480",
              "imgUrl": null,
              "approvedDate": null,
              "orgTypeId": null,
              "homeUrl": null,
              "isDefault": true,
              "createdDate": "2019-01-18 09:48:13:428+0000",
              "contactDetail": null,
              "parentOrgId": null,
              "createdBy": "system",
              "hashTagId": "0126796199493140480",
              "noOfMembers": null,
              "status": 1
          },
          "profileSummary": null,
          "phoneVerified": false,
          "tcUpdatedDate": null,
          "recoveryPhone": "",
          "avatar": null,
          "userName": "username1",
          "promptTnC": true,
          "lastLoginTime": null,
          "emailVerified": true,
          "framework": {},
          "createdDate": "2020-11-23 07:02:36:155+0000",
          "createdBy": null,
          "location": null,
          "tncAcceptedVersion": null
          },
          {
          "webPages": [],
          "tcStatus": null,
          "maskedPhone": null,
          "rootOrgName": "org3",
          "subject": [],
          "channel": "channel1",
          "language": [],
          "updatedDate": null,
          "managedBy": null,
          "flagsValue": 2,
          "id": "3",
          "recoveryEmail": "",
          "identifier": "3",
          "thumbnail": null,
          "updatedBy": null,
          "accesscode": null,
          "locationIds": [],
          "registryId": null,
          "rootOrgId": "0126796199493140480",
          "prevUsedEmail": "",
          "firstname": "Navin",
          "tncAcceptedOn": null,
          "allTncAccepted": {},
          "phone": "",
          "dob": null,
          "grade": [],
          "currentLoginTime": null,
          "userType": "TEACHER",
          "userSubType": null,
          "status": 1,
          "lastname": "Vidyashankar",
          "tncLatestVersion": "v8",
          "gender": null,
          "roles": [
              "PUBLIC"
          ],
          "prevUsedPhone": "",
          "stateValidated": false,
          "isDeleted": false,
          "organisations": [
              {
              "updatedBy": null,
              "organisationId": "0126796199493140480",
              "orgName": "org3",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "PUBLIC"
              ],
              "approvedBy": null,
              "isSelfDeclared": true,
              "updatedDate": null,
              "userId": "3",
              "approvaldate": null,
              "associationtype": 2,
              "isSystemUpload": false,
              "isDeleted": false,
              "hashTagId": "0126796199493140480",
              "isSSO": false,
              "isRejected": null,
              "position": null,
              "id": 3157455573689335,
              "orgjoindate": "2020-11-23 07:02:43:194+0000",
              "isApproved": null,
              "orgLeftDate": null
              }
          ],
          "provider": null,
          "countryCode": null,
          "tncLatestVersionUrl": "https://organisation.blob.core.windows.net/termsandcond/terms-and-conditions-v8.html",
          "maskedEmail": "se*************@yopmail.com",
          "tempPassword": null,
          "email": "navinDatta4@yopmail.com",
          "rootOrg": {
              "dateTime": null,
              "preferredLanguage": null,
              "keys": {
              "encKeys": [
                  456
              ],
              "signKeys": [
                  456
              ]
              },
              "channel": "channel1",
              "approvedBy": null,
              "description": "org3",
              "updatedDate": "2020-08-28 10:12:01:096+0000",
              "addressId": null,
              "orgType": null,
              "provider": null,
              "orgCode": null,
              "locationId": null,
              "theme": null,
              "id": "0126796199493140480",
              "isApproved": null,
              "communityId": null,
              "slug": "channel1",
              "email": null,
              "isSSOEnabled": null,
              "thumbnail": null,
              "updatedBy": null,
              "orgName": "org3",
              "locationIds": [
              "027f81d8-0a2c-4fc6-96ac-59fe4cea3abf",
              "8250d58d-f1a2-4397-bfd3-b2e688ba7141"
              ],
              "externalId": null,
              "isRootOrg": true,
              "rootOrgId": "0126796199493140480",
              "imgUrl": null,
              "approvedDate": null,
              "orgTypeId": null,
              "homeUrl": null,
              "isDefault": true,
              "createdDate": "2019-01-18 09:48:13:428+0000",
              "contactDetail": null,
              "parentOrgId": null,
              "createdBy": "system",
              "hashTagId": "0126796199493140480",
              "noOfMembers": null,
              "status": 1
          },
          "profileSummary": null,
          "phoneVerified": false,
          "tcUpdatedDate": null,
          "recoveryPhone": "",
          "avatar": null,
          "userName": "username1",
          "promptTnC": true,
          "lastLoginTime": null,
          "emailVerified": true,
          "framework": {},
          "createdDate": "2020-11-23 07:02:36:155+0000",
          "createdBy": null,
          "location": null,
          "tncAcceptedVersion": null
          },
          {
          "webPages": [],
          "tcStatus": null,
          "maskedPhone": null,
          "rootOrgName": "org3",
          "subject": [],
          "channel": "channel1",
          "language": [],
          "updatedDate": null,
          "managedBy": null,
          "flagsValue": 2,
          "id": "4",
          "recoveryEmail": "",
          "identifier": "4",
          "thumbnail": null,
          "updatedBy": null,
          "accesscode": null,
          "locationIds": [],
          "registryId": null,
          "rootOrgId": "0126796199493140480",
          "prevUsedEmail": "",
          "firstname": "Balaji",
          "tncAcceptedOn": null,
          "allTncAccepted": {},
          "phone": "",
          "dob": null,
          "grade": [],
          "currentLoginTime": null,
          "userType": "TEACHER",
          "userSubType": null,
          "status": 1,
          "lastname": "Vasi",
          "tncLatestVersion": "v8",
          "gender": null,
          "roles": [
              "PUBLIC"
          ],
          "prevUsedPhone": "",
          "stateValidated": false,
          "isDeleted": false,
          "organisations": [
              {
              "updatedBy": null,
              "organisationId": "0126796199493140480",
              "orgName": "org3",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "PUBLIC"
              ],
              "approvedBy": null,
              "isSelfDeclared": true,
              "updatedDate": null,
              "userId": "4",
              "approvaldate": null,
              "associationtype": 2,
              "isSystemUpload": false,
              "isDeleted": false,
              "hashTagId": "0126796199493140480",
              "isSSO": false,
              "isRejected": null,
              "position": null,
              "id": 3157455573689335,
              "orgjoindate": "2020-11-23 07:02:43:194+0000",
              "isApproved": null,
              "orgLeftDate": null
              }
          ],
          "provider": null,
          "countryCode": null,
          "tncLatestVersionUrl": "https://organisation.blob.core.windows.net/termsandcond/terms-and-conditions-v8.html",
          "maskedEmail": "se*************@yopmail.com",
          "tempPassword": null,
          "email": "balajiDesh5004@yopmail.com",
          "rootOrg": {
              "dateTime": null,
              "preferredLanguage": null,
              "keys": {
              "encKeys": [
                  456
              ],
              "signKeys": [
                  456
              ]
              },
              "channel": "channel1",
              "approvedBy": null,
              "description": "org3",
              "updatedDate": "2020-08-28 10:12:01:096+0000",
              "addressId": null,
              "orgType": null,
              "provider": null,
              "orgCode": null,
              "locationId": null,
              "theme": null,
              "id": "0126796199493140480",
              "isApproved": null,
              "communityId": null,
              "slug": "channel1",
              "email": null,
              "isSSOEnabled": null,
              "thumbnail": null,
              "updatedBy": null,
              "orgName": "org3",
              "locationIds": [
              "027f81d8-0a2c-4fc6-96ac-59fe4cea3abf",
              "8250d58d-f1a2-4397-bfd3-b2e688ba7141"
              ],
              "externalId": null,
              "isRootOrg": true,
              "rootOrgId": "0126796199493140480",
              "imgUrl": null,
              "approvedDate": null,
              "orgTypeId": null,
              "homeUrl": null,
              "isDefault": true,
              "createdDate": "2019-01-18 09:48:13:428+0000",
              "contactDetail": null,
              "parentOrgId": null,
              "createdBy": "system",
              "hashTagId": "0126796199493140480",
              "noOfMembers": null,
              "status": 1
          },
          "profileSummary": null,
          "phoneVerified": false,
          "tcUpdatedDate": null,
          "recoveryPhone": "",
          "avatar": null,
          "userName": "username1",
          "promptTnC": true,
          "lastLoginTime": null,
          "emailVerified": true,
          "framework": {},
          "createdDate": "2020-11-23 07:02:36:155+0000",
          "createdBy": null,
          "location": null,
          "tncAcceptedVersion": null
          },
          {
          "webPages": [],
          "tcStatus": null,
          "maskedPhone": null,
          "rootOrgName": "org3",
          "subject": [],
          "channel": "channel1",
          "language": [],
          "updatedDate": null,
          "managedBy": null,
          "flagsValue": 2,
          "id": "5",
          "recoveryEmail": "",
          "identifier": "5",
          "thumbnail": null,
          "updatedBy": null,
          "accesscode": null,
          "locationIds": [],
          "registryId": null,
          "rootOrgId": "0126796199493140480",
          "prevUsedEmail": "",
          "firstname": "Sharad",
          "tncAcceptedOn": null,
          "allTncAccepted": {},
          "phone": "",
          "dob": null,
          "grade": [],
          "currentLoginTime": null,
          "userType": "TEACHER",
          "userSubType": null,
          "status": 1,
          "lastname": "Sithi",
          "tncLatestVersion": "v8",
          "gender": null,
          "roles": [
              "PUBLIC"
          ],
          "prevUsedPhone": "",
          "stateValidated": false,
          "isDeleted": false,
          "organisations": [
              {
              "updatedBy": null,
              "organisationId": "0126796199493140480",
              "orgName": "org3",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "PUBLIC"
              ],
              "approvedBy": null,
              "isSelfDeclared": true,
              "updatedDate": null,
              "userId": "5",
              "approvaldate": null,
              "associationtype": 2,
              "isSystemUpload": false,
              "isDeleted": false,
              "hashTagId": "0126796199493140480",
              "isSSO": false,
              "isRejected": null,
              "position": null,
              "id": 3157455573689335,
              "orgjoindate": "2020-11-23 07:02:43:194+0000",
              "isApproved": null,
              "orgLeftDate": null
              }
          ],
          "provider": null,
          "countryCode": null,
          "tncLatestVersionUrl": "https://organisation.blob.core.windows.net/termsandcond/terms-and-conditions-v8.html",
          "maskedEmail": "se*************@yopmail.com",
          "tempPassword": null,
          "email": "sharad.sithi@yopmail.com",
          "rootOrg": {
              "dateTime": null,
              "preferredLanguage": null,
              "keys": {
              "encKeys": [
                  456
              ],
              "signKeys": [
                  456
              ]
              },
              "channel": "channel1",
              "approvedBy": null,
              "description": "org3",
              "updatedDate": "2020-08-28 10:12:01:096+0000",
              "addressId": null,
              "orgType": null,
              "provider": null,
              "orgCode": null,
              "locationId": null,
              "theme": null,
              "id": "0126796199493140480",
              "isApproved": null,
              "communityId": null,
              "slug": "channel1",
              "email": null,
              "isSSOEnabled": null,
              "thumbnail": null,
              "updatedBy": null,
              "orgName": "org3",
              "locationIds": [
              "027f81d8-0a2c-4fc6-96ac-59fe4cea3abf",
              "8250d58d-f1a2-4397-bfd3-b2e688ba7141"
              ],
              "externalId": null,
              "isRootOrg": true,
              "rootOrgId": "0126796199493140480",
              "imgUrl": null,
              "approvedDate": null,
              "orgTypeId": null,
              "homeUrl": null,
              "isDefault": true,
              "createdDate": "2019-01-18 09:48:13:428+0000",
              "contactDetail": null,
              "parentOrgId": null,
              "createdBy": "system",
              "hashTagId": "0126796199493140480",
              "noOfMembers": null,
              "status": 1
          },
          "profileSummary": null,
          "phoneVerified": false,
          "tcUpdatedDate": null,
          "recoveryPhone": "",
          "avatar": null,
          "userName": "username1",
          "promptTnC": true,
          "lastLoginTime": null,
          "emailVerified": true,
          "framework": {},
          "createdDate": "2020-11-23 07:02:36:155+0000",
          "createdBy": null,
          "location": null,
          "tncAcceptedVersion": null
          },
          {
          "webPages": [],
          "tcStatus": null,
          "maskedPhone": null,
          "rootOrgName": "org3",
          "subject": [],
          "channel": "channel1",
          "language": [],
          "updatedDate": null,
          "managedBy": null,
          "flagsValue": 2,
          "id": "6",
          "recoveryEmail": "",
          "identifier": "6",
          "thumbnail": null,
          "updatedBy": null,
          "accesscode": null,
          "locationIds": [],
          "registryId": null,
          "rootOrgId": "0126796199493140480",
          "prevUsedEmail": "",
          "firstname": "Mudra",
          "tncAcceptedOn": null,
          "allTncAccepted": {},
          "phone": "",
          "dob": null,
          "grade": [],
          "currentLoginTime": null,
          "userType": "TEACHER",
          "userSubType": null,
          "status": 1,
          "lastname": "Bhosale",
          "tncLatestVersion": "v8",
          "gender": null,
          "roles": [
              "PUBLIC"
          ],
          "prevUsedPhone": "",
          "stateValidated": false,
          "isDeleted": false,
          "organisations": [
              {
              "updatedBy": null,
              "organisationId": "0126796199493140480",
              "orgName": "org3",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "PUBLIC"
              ],
              "approvedBy": null,
              "isSelfDeclared": true,
              "updatedDate": null,
              "userId": "6",
              "approvaldate": null,
              "associationtype": 2,
              "isSystemUpload": false,
              "isDeleted": false,
              "hashTagId": "0126796199493140480",
              "isSSO": false,
              "isRejected": null,
              "position": null,
              "id": 3157455573689335,
              "orgjoindate": "2020-11-23 07:02:43:194+0000",
              "isApproved": null,
              "orgLeftDate": null
              }
          ],
          "provider": null,
          "countryCode": null,
          "tncLatestVersionUrl": "https://organisation.blob.core.windows.net/termsandcond/terms-and-conditions-v8.html",
          "maskedEmail": "se*************@yopmail.com",
          "tempPassword": null,
          "email": "mudraBhosale123@yopmail.com",
          "rootOrg": {
              "dateTime": null,
              "preferredLanguage": null,
              "keys": {
              "encKeys": [
                  456
              ],
              "signKeys": [
                  456
              ]
              },
              "channel": "channel1",
              "approvedBy": null,
              "description": "org3",
              "updatedDate": "2020-08-28 10:12:01:096+0000",
              "addressId": null,
              "orgType": null,
              "provider": null,
              "orgCode": null,
              "locationId": null,
              "theme": null,
              "id": "0126796199493140480",
              "isApproved": null,
              "communityId": null,
              "slug": "channel1",
              "email": null,
              "isSSOEnabled": null,
              "thumbnail": null,
              "updatedBy": null,
              "orgName": "org3",
              "locationIds": [
              "027f81d8-0a2c-4fc6-96ac-59fe4cea3abf",
              "8250d58d-f1a2-4397-bfd3-b2e688ba7141"
              ],
              "externalId": null,
              "isRootOrg": true,
              "rootOrgId": "0126796199493140480",
              "imgUrl": null,
              "approvedDate": null,
              "orgTypeId": null,
              "homeUrl": null,
              "isDefault": true,
              "createdDate": "2019-01-18 09:48:13:428+0000",
              "contactDetail": null,
              "parentOrgId": null,
              "createdBy": "system",
              "hashTagId": "0126796199493140480",
              "noOfMembers": null,
              "status": 1
          },
          "profileSummary": null,
          "phoneVerified": false,
          "tcUpdatedDate": null,
          "recoveryPhone": "",
          "avatar": null,
          "userName": "username1",
          "promptTnC": true,
          "lastLoginTime": null,
          "emailVerified": true,
          "framework": {},
          "createdDate": "2020-11-23 07:02:36:155+0000",
          "createdBy": null,
          "location": null,
          "tncAcceptedVersion": null
          },
          {
          "webPages": [],
          "tcStatus": null,
          "maskedPhone": null,
          "rootOrgName": "org3",
          "subject": [],
          "channel": "channel1",
          "language": [],
          "updatedDate": null,
          "managedBy": null,
          "flagsValue": 2,
          "id": "999",
          "recoveryEmail": "",
          "identifier": "999",
          "thumbnail": null,
          "updatedBy": null,
          "accesscode": null,
          "locationIds": [],
          "registryId": null,
          "rootOrgId": "0126796199493140480",
          "prevUsedEmail": "",
          "firstname": "Mahesh",
          "tncAcceptedOn": null,
          "allTncAccepted": {},
          "phone": "",
          "dob": null,
          "grade": [],
          "currentLoginTime": null,
          "userType": "TEACHER",
          "userSubType": null,
          "status": 1,
          "lastname": "Jadhav",
          "tncLatestVersion": "v8",
          "gender": null,
          "roles": [
              "PUBLIC"
          ],
          "prevUsedPhone": "",
          "stateValidated": false,
          "isDeleted": false,
          "organisations": [
              {
              "updatedBy": null,
              "organisationId": "0126796199493140480",
              "orgName": "org3",
              "addedByName": null,
              "addedBy": null,
              "roles": [
                  "PUBLIC"
              ],
              "approvedBy": null,
              "isSelfDeclared": true,
              "updatedDate": null,
              "userId": "999",
              "approvaldate": null,
              "associationtype": 2,
              "isSystemUpload": false,
              "isDeleted": false,
              "hashTagId": "0126796199493140480",
              "isSSO": false,
              "isRejected": null,
              "position": null,
              "id": 3157455573689335,
              "orgjoindate": "2020-11-23 07:02:43:194+0000",
              "isApproved": null,
              "orgLeftDate": null
              }
          ],
          "provider": null,
          "countryCode": null,
          "tncLatestVersionUrl": "https://organisation.blob.core.windows.net/termsandcond/terms-and-conditions-v8.html",
          "maskedEmail": "se*************@yopmail.com",
          "tempPassword": null,
          "email": "abcd@yopmail.com",
          "rootOrg": {
              "dateTime": null,
              "preferredLanguage": null,
              "keys": {
              "encKeys": [
                  456
              ],
              "signKeys": [
                  456
              ]
              },
              "channel": "channel1",
              "approvedBy": null,
              "description": "org3",
              "updatedDate": "2020-08-28 10:12:01:096+0000",
              "addressId": null,
              "orgType": null,
              "provider": null,
              "orgCode": null,
              "locationId": null,
              "theme": null,
              "id": "0126796199493140480",
              "isApproved": null,
              "communityId": null,
              "slug": "channel1",
              "email": null,
              "isSSOEnabled": null,
              "thumbnail": null,
              "updatedBy": null,
              "orgName": "org3",
              "locationIds": [
              "027f81d8-0a2c-4fc6-96ac-59fe4cea3abf",
              "8250d58d-f1a2-4397-bfd3-b2e688ba7141"
              ],
              "externalId": null,
              "isRootOrg": true,
              "rootOrgId": "0126796199493140480",
              "imgUrl": null,
              "approvedDate": null,
              "orgTypeId": null,
              "homeUrl": null,
              "isDefault": true,
              "createdDate": "2019-01-18 09:48:13:428+0000",
              "contactDetail": null,
              "parentOrgId": null,
              "createdBy": "system",
              "hashTagId": "0126796199493140480",
              "noOfMembers": null,
              "status": 1
          },
          "profileSummary": null,
          "phoneVerified": false,
          "tcUpdatedDate": null,
          "recoveryPhone": "",
          "avatar": null,
          "userName": "username1",
          "promptTnC": true,
          "lastLoginTime": null,
          "emailVerified": true,
          "framework": {},
          "createdDate": "2020-11-23 07:02:36:155+0000",
          "createdBy": null,
          "location": null,
          "tncAcceptedVersion": null
          }
      ]
    }
  }
export const filterData = {
    "id":"api.form.read",
    "params":{
       "resmsgid":"251de369-f446-4c86-a46f-68cf581a0c2a",
       "msgid":"643e0a90-3601-4ea0-a109-2b12b13cdb3c",
       "status":"successful"
    },
    "responseCode":"OK",
    "result":{
       "form":{
          "type":"content",
          "subtype":"*",
          "action":"filter",
          "component":"*",
          "framework":"*",
          "data":{
             "templateName":"defaultTemplate",
             "action":"create",
             "fields":[
                {
                   "code":"eventType",
                   "dataType":"text",
                   "name":"Event Type",
                   "label":"Event Type",
                   "description":"Type of the event",
                   "editable":true,
                   "default":"",
                   "placeholder":"Select Event Type",
                   "inputType":"select",
                   "required":false,
                   "displayProperty":"Editable",
                   "visible":true,
                   "range":[
                      "Online",
                      "Offline",
                      "OnlineAndOffline"
                   ],
                   "renderingHints":{
                      "semanticColumnWidth":"six"
                   },
                   "index":4
                },
                {
                   "code":"eventTime",
                   "dataType":"text",
                   "name":"Event Time",
                   "label":"Event Time",
                   "description":"Time of the event",
                   "editable":true,
                   "default":"",
                   "placeholder":"Select Event Time",
                   "inputType":"select",
                   "required":false,
                   "displayProperty":"Editable",
                   "visible":true,
                   "range":[
                      "Past",
                      "Upcoming",
                      "Ongoing"
                   ],
                   "renderingHints":{
                      "semanticColumnWidth":"six"
                   },
                   "index":4
                },
                {
                   "code":"eventStatus",
                   "dataType":"text",
                   "name":"Event Status",
                   "label":"Event Status",
                   "description":"Status of the event",
                   "editable":true,
                   "default":"",
                   "placeholder":"Select Event Status",
                   "inputType":"select",
                   "required":false,
                   "displayProperty":"Editable",
                   "visible":true,
                   "range":[
                      "Live",
                      "Draft"
                   ],
                   "renderingHints":{
                      "semanticColumnWidth":"six"
                   },
                   "index":4
                }
             ]
          },
          "created_on":"2021-11-01T11:36:42.600Z",
          "last_modified_on":"2021-11-02T06:20:28.731Z",
          "rootOrgId":"*"
       }
    },
    "ts":"2021-12-06T04:29:09.397Z",
    "ver":"1.0"
 }
 export const createEventForm = {
    "id": "api.form.read",
    "params": {
        "resmsgid": "21e6f3da-8a7c-44cc-a6c0-4703dcc60927",
        "msgid": "cfe90415-9aff-439f-b580-170b9189db85",
        "status": "successful"
    },
    "responseCode": "OK",
    "result": {
        "form": {
            "type": "content",
            "subtype": "textbook",
            "action": "create",
            "component": "*",
            "framework": "tn_k-12_5",
            "data": {
                "templateName": "defaultTemplate",
                "action": "create",
                "fields": [
                    {
                        "code": "name",
                        "dataType": "text",
                        "name": "Name",
                        "label": "Event Name",
                        "description": "Event Name",
                        "editable": true,
                        "placeholder": "Event Name",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                                "type": "regex",
                                "value": "^[a-zA-Z0-9 &]*$",
                                "message": "Invalid Input"
                            },
                            {
                                "type": "required",
                                "value": "80",
                                "message": "Enter Event Name"
                            }
                        ]
                    },
                    {
                        "code": "description",
                        "dataType": "text",
                        "name": "Description",
                        "label": "Description",
                        "description": "Event Description",
                        "editable": true,
                        "placeholder": "Description",
                        "inputType": "textarea",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    },
                    {
                        "code": "category",
                        "dataType": "text",
                        "name": "Category",
                        "label": "Category",
                        "description": "Category of the event to use to teach",
                        "editable": true,
                        "placeholder": "Select Event Category",
                        "inputType": "select",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "range": ["Sport", "Automobiles", "Technology"],
                        "renderingHints": {
                            "semanticColumnWidth": "six"
                        },
                        "index": 4
                    },
                    {
                        "code": "evenType",
                        "dataType": "text",
                        "name": "Event Type",
                        "label": "Event Type",
                        "description": "Type of the event",
                        "editable": true,
                        "placeholder": "Select Event Type",
                        "inputType": "select",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "range": ["Online", "Offline"],
                        "renderingHints": {
                            "semanticColumnWidth": "six"
                        },
                        "index": 4
                    }, {
                        "code": "onlineProvider",
                        "dataType": "text",
                        "name": "Online Provider",
                        "label": "Online Provider",
                        "description": "Online Provider",
                        "editable": true,
                        "placeholder": "E.g Zoome",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    }, {
                        "code": "onlineProviderData",
                        "dataType": "text",
                        "name": "Online Provider Data",
                        "label": "Online Provider Data",
                        "description": "Online Provider Data",
                        "editable": true,
                        "placeholder": "<meetingLink>",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    }, {
                        "code": "visibility",
                        "dataType": "text",
                        "name": "Visibility",
                        "label": "Visibility",
                        "description": "Visibility",
                        "editable": true,
                        "placeholder": "Visibility",
                        "inputType": "checkbox",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    }, {
                        "code": "audience",
                        "dataType": "text",
                        "name": "Audience",
                        "label": "Audience",
                        "description": "Audience",
                        "editable": true,
                        "placeholder": "Select Audience",
                        "inputType": "select",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "range": ["Student", "Teacher", "Parents"],
                        "renderingHints": {
                            "semanticColumnWidth": "six"
                        },
                        "index": 4
                    }, {
                        "code": "keywords",
                        "dataType": "text",
                        "name": "Keywords",
                        "label": "Keywords",
                        "description": "Keywords",
                        "editable": true,
                        "placeholder": "Keywords",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    },
                    {
                        "code": "code",
                        "dataType": "text",
                        "name": "Code",
                        "label": "Code",
                        "description": "Code",
                        "editable": true,
                        "placeholder": "Code",
                        "inputType": "text",
                        "required": true,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "class": "sb-g-col-lg-1 required"
                        },
                        "index": 6,
                        "validations": [{
                                "type": "regex",
                                "value": "^[a-zA-Z0-9]*$",
                                "message": "Invalid Input"
                            },
                            {
                                "type": "required",
                                "value": "80",
                                "message": "Enter Code"
                            }
                        ]
                    },
                    {
                        "code": "dialcodes",
                        "dataType": "text",
                        "name": "Dialcodes",
                        "label": "Dialcodes",
                        "description": "Dialcodes",
                        "editable": true,
                        "placeholder": "Publisher",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "six"
                        },
                        "index": 6,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9]*$",
                            "message": "Invalid Input"
                        }]
                    },
                    {
                        "code": "createdFor",
                        "dataType": "text",
                        "name": "createdFor",
                        "label": "Created For",
                        "description": "Created For",
                        "editable": true,
                        "placeholder": "Created For",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    },
                    {
                        "code": "source",
                        "dataType": "text",
                        "name": "source",
                        "label": "Source",
                        "description": "Source",
                        "editable": true,
                        "placeholder": "Source",
                        "inputType": "text",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": [{
                            "type": "regex",
                            "value": "^[a-zA-Z0-9 &]*$",
                            "message": "Invalid Input"
                        }]
                    },  {
                        "code": "registrationStartDate",
                        "dataType": "date",
                        "name": "Registration Start Date",
                        "label": "Registration Start Date",
                        "description": "Registration Start Date",
                        "editable": true,
                        "placeholder": "Registration Start Date",
                        "inputType": "date",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "registrationEndDate",
                        "dataType": "date",
                        "name": "Registration End Date",
                        "label": "Registration End Date",
                        "description": "Registration End Date",
                        "editable": true,
                        "placeholder": "Registration End Date",
                        "inputType": "date",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "startDate",
                        "dataType": "date",
                        "name": "Event Start Date",
                        "label": "Event Start Date",
                        "description": "Event Start Date",
                        "editable": true,
                        "placeholder": "Event Start Date",
                        "inputType": "date",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "startTime",
                        "dataType": "time",
                        "name": "Event Start Time",
                        "label": "Event Start Time",
                        "description": "Event Start Time",
                        "editable": true,
                        "placeholder": "Event Start Time",
                        "inputType": "date",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "endDate",
                        "dataType": "date",
                        "name": "Event End Date",
                        "label": "Event End Date",
                        "description": "Event End Date",
                        "editable": true,
                        "placeholder": "Event End Date",
                        "inputType": "date",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    },
                    {
                        "code": "endTime",
                        "dataType": "time",
                        "name": "Event End Time",
                        "label": "Event End Time",
                        "description": "Event End Time",
                        "editable": true,
                        "placeholder": "Event End Time",
                        "inputType": "date",
                        "required": false,
                        "displayProperty": "Editable",
                        "visible": true,
                        "renderingHints": {
                            "semanticColumnWidth": "twelve"
                        },
                        "index": 1,
                        "validations": []
                    }
                ]
            },
            "created_on": "2020-11-12T07:02:44.056Z",
            "last_modified_on": "2020-11-12T07:02:59.202Z",
            "rootOrgId": "01269878797503692810"
        }
    },
    "ts": "2021-02-17T05:33:12.609Z",
    "ver": "1.0"
}
export const colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    yellow: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
  };