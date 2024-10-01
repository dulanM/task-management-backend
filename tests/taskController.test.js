const Task = require('../models/Task');
const taskController = require('../controllers/taskController');

jest.mock('../models/Task');

describe('Task Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();  // 
  });

  // Test for create task
  describe('create Task', () => {
    let req, res;

    beforeEach(() => {
      req = {
        body: {
          title: 'Test Task',
          description: 'This is a test task',
          priority: 'HIGH',
          status: 'PENDING'
        },
        userId: '60d21b4667d0d8992e610c85'  // Simulated user ID
      };

      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      // Clear all mocks before each test
      jest.clearAllMocks();
    });

    it('should create a task successfully', async () => {
      // Mocking the task object that should be returned after save
    const savedTask = {
      _id: '60d21b9967d0d8992e610c90',  // Simulated Task ID
      title: 'Test Task',
      description: 'This is a test task',
      priority: 'HIGH',
      status: 'PENDING',
      userId: req.userId,
      createdAt: new Date()  // Simulated createdAt field
    };

    // Mocking Task model's save method to simulate successful task creation
    Task.prototype.save = jest.fn().mockResolvedValue(savedTask);
      await taskController.createTask(req, res);

      // Check that the task was saved
      expect(Task).toHaveBeenCalled();
      expect(Task.prototype.save).toHaveBeenCalled();

      // Check that response status and json were called with the right arguments
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        _id: expect.any(String),
        title: 'Test Task',
        description: 'This is a test task',
        priority: 'HIGH',
        status: 'PENDING',
        userId: '60d21b4667d0d8992e610c85',
        createdAt: expect.any(Date)
      }));
    });


  });
  // Test for getTasks
  // describe('getTasks', () => {
  //   it('should return all tasks for a user', async () => {
  //     const req = { userId: 'testUser' };  // Simulate request object with userId
  //     const res = {
  //       status: jest.fn().mockReturnThis(),
  //       json: jest.fn(),
  //     };

  //     // Mock tasks data that would be returned from the database
  //     const mockTasks = [
  //       { _id: 'task1', title: 'Task 1', userId: 'testUser' },
  //       { _id: 'task2', title: 'Task 2', userId: 'testUser' },
  //     ];

  //     // Mock Task.find to return the mock tasks
  //     Task.find.mockResolvedValue(mockTasks);

  //     // Call the controller method
  //     await taskController.getTasks(req, res);

  //     expect(Task.find).toHaveBeenCalledWith({ userId: 'testUser' });

  //     // Ensure res.status(200)
  //     expect(res.status).toHaveBeenCalledWith(200);

  //     // Ensure res.json
  //     expect(res.json).toHaveBeenCalledWith(mockTasks);
  //   });

  //   it('should return 500 when there is a server error', async () => {
  //     const req = { userId: 'testUser' };
  //     const res = {
  //       status: jest.fn().mockReturnThis(),
  //       json: jest.fn(),
  //     };

  //     Task.find.mockRejectedValue(new Error('Database error'));

  //     // Call the controller method
  //     await taskController.getTasks(req, res);

  //     // Ensure res.status(500)
  //     expect(res.status).toHaveBeenCalledWith(500);

  //     // Ensure res.json
  //     expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
  //   });
  // });
});
