const express = require('express');
const router = express.Router();

const Product = require('../../models/Products');

router.get('/test', (req, res) => res.send('Products route test'));

//get product
router.get('/', (req, res) => {
    Product.find()
      .then(product => res.json(product))
      .catch(err => res.status(404).json({ noproductsfound: 'No products found' }));
  });


// add product
  router.post('/', (req, res) => {
    Product.create(req.body)
      .then(product => res.json({ msg: 'Product added successfully' }))
      .catch(err => res.status(404).json({ noproductsfound: 'Unable to add this product' }));
  });

// update

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
      .then(product => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });

// del

router.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, req.body)
      .then(product => res.json({ mgs: 'Product deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a product' }));
  });

 module.exports = router;