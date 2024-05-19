let _express = require('express')
let _mysql2 = require('mysql2')
let app = _express()

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.set('view engine', 'ejs')
app.engine("ejs", require("ejs").__express);
let con = _mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Task_Management'
})

// Fetch all lists
app.get('/lists', function (req, res) {
    con.connect(function (error) {
        if (error) throw error
        con.query('SELECT * FROM List', function (err, result) {
            if (err) throw err
            res.json(result); // Send the result as JSON response
        })
    })
})

// Fetch a single list by ID
app.get('/lists/:listId', function (req, res) {
    let listId = req.params.listId;
    con.connect(function (error) {
        if (error) throw error
        con.query('SELECT * FROM List WHERE id = ?', [listId], function (err, result) {
            if (err) throw err
            res.json(result); // Send the result as JSON response
        })
    })
})


// Add a new list
app.post('/lists', function (req, res) {
    let newListData = { List_name: req.body.List_name }; // Assuming the request body contains the data for the new list
    con.connect(function (error) {
        if (error) throw error
        con.query('INSERT INTO List SET ?', newListData, function (err, result) {
            if (err) throw err
            res.json({ message: 'List added successfully' }); // Send success message as JSON response
        })
    })
})


// Update a list by ID
app.patch('/lists/:listId', function (req, res) {
    let listId = req.params.listId;
    let updatedListData = { List_name: req.body.List_name };
    con.query('UPDATE List SET ? WHERE id = ?', [updatedListData, listId], function (err, result) {
      if (err) throw err;
      con.query('SELECT * FROM List WHERE id = ?', [listId], function (err, updatedList) {
        if (err) throw err;
        res.json({ message: 'List updated successfully', updatedList: updatedList[0] });
      });
    });
  });



// Delete a list by ID
app.delete('/lists/:listId', function (req, res) {
    let listId = req.params.listId;
    con.connect(function (error) {
        if (error) throw error
        // Fetch the ID of the deleted list before deleting it
        con.query('SELECT id FROM List WHERE id = ?', [listId], function (err, deletedList) {
            if (err) throw err
            con.query('DELETE FROM List WHERE id = ?', [listId], function (err, result) {
                if (err) throw err
                res.json({ message: 'List deleted successfully', deletedListId: deletedList[0].id }); // Send success message along with the ID of the deleted list as JSON response
            })
        });
    })
})

app.listen(3600, function () {
    console.log('Server Is Running...');
})
