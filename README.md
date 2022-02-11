### API Routes

#### **/** - Displays Generic server status.

#### **/update** - Updates fields of a form

```
Body
{
  "to": "br5ncsiv3", // form id
  "data": [
    {
	"3": { // field id
        "value": "3" // record id #
      },
      "6": {
        "value": "200" // quantity
      }
    }
  ],
  "fieldsToReturn": [
    6,
    7
  ]
}
```

#### **/count** -Displays message showing that you're on the count route.

- Field IDs can be found by opening a table and looking at the field [Formstack Test Count DB.](piedmontplumbers.quickbase.com/db/br47u9tx3)

#### **/count/getrecords** - Gets records for a table, the "from" field in the body is what determines the table that is selected.

```
Body
{
  "form": "br5n5hn9q" // form id (string)
}
```

#### **/count/bag** - Updates the value for the Bag table

```
Body
{
  "itemId": string,
  "newQty": string
}
```

#### **/count/bin** - Updates the value for the Bin table

```
Body
{
  "itemId": string,
  "newQty": string
}
```

#### **/count/box** - Updates the value for the Box table

```
Body
{
  "itemId": string,
  "newQty": string
}
```

#### **/count/case** - Updates the value for the Case table

```
Body
{
  "itemId": string,
  "newQty": string
}
```

#### **/count/ea** - Updates the value for the EA Qty table

```
Body
{
  "itemId": string,
  "newQty": string
}
```
