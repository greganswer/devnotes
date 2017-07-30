#### Ways to emit events on the server

    - `io.emit(EVENT_NAME, ARGS)` -> emit to all users
    - `socket.broadcast.emit(EVENT_NAME, ARGS)` -> emit to all users except current user
    - `socket.emit(EVENT_NAME, ARGS)` -> emit to a specific user

    #### Ways to emit events to a specific channel

    - `io.to(ROOM_NAME).emit(EVENT_NAME, ARGS)` -> emit to all users
    - `socket.broadcast.to(ROOM_NAME).emit(EVENT_NAME, ARGS)` -> emit to all users except current user
