#### Stack - Order of Insertions and Removals ####
* __Stack__ follows the principle of _LIFO_ or Last in, First Out.
  The last item entered into the __Stack__ is removed first. If the Stack contains 5 items and a 6th is added. The 6th item will be removed first. Like a stack of Bricks the newest item goes to the top. This is can performed with the syntax _.push_. In order to remove from the __Stack__ _.pop_ can be used. _add_ and _remove_ can be used in similar fashion to _.push_ and _.pop_.
#### Queue - Order of Insertions and Removals ####
* __Queue__ follows the principle of _FIFO_ or First in First Out.
  The first item entered into the __Queue__ is removed first.
  __Queue's__ work in the order of _back-front_. This means any new item added to the __Queue__ goes to the back. To add to a __Queue__ the command _enqueue_ should be called. In order to remove from the __Queue__ the command _dequeue_ should be called.
#### Linked List - retrieval time complexity ####
* __Linked Lists__ require traversal of the list in order to retrieve the    data being called. To index a __Linked List__ the time complexity would    be _0(n)_ complexity. Insertion/Deletion however can be performed _0(1)_   complexity.
#### Hash Table - retrieval time complexity ####
* __Hash Tables__ for all intensive purposes operate at a time complexity    of _0(1)_. However, if resizing of the table is required this would be     more along the lines of 0(n) complexity.
#### Binary Search Trees - retrieval time complexity ####
* __Binary Search Trees__ access times vary between _0(log(n))_ to _0(n)_
#### Advantages of using a _Hash Table_ over an _Array_ in __JavaScript__
* __Hash Tables__ allow for constant time complexity. Wheras an _Array_ becomes increaseingly more complex dependent on the number of items in the _Array_ and whether or not the _index_ of the data to be called is known.


