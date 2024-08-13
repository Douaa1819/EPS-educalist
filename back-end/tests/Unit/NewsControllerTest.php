<?php

namespace Tests\Unit;

use App\Models\News;
use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\TestCase;

class NewsControllerTest extends TestCase
{
    use RefreshDatabase;

    protected $controller;

    protected function setUp(): void
    {
        parent::setUp();
        $this->controller = new NewsController();
    }

    public function testIndex()
    {
        News::factory()->count(3)->create();
        $response = $this->controller->index();
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertCount(3, $response->getData()->data);
    }

    public function testStore()
    {
        $request = new Request([
            'title' => 'Test News',
            'content' => 'This is test content',
            'type' => 'Event',
        ]);
        $response = $this->controller->store($request);
        $this->assertEquals(201, $response->getStatusCode());
        $this->assertEquals('Test News', $response->getData()->data->title);
    }

    public function testShow()
    {
        $news = News::factory()->create();
        $response = $this->controller->show($news);
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals($news->id, $response->getData()->data->id);
    }

    public function testUpdate()
    {
        $news = News::factory()->create();
        $request = new Request([
            'title' => 'Updated News',
        ]);
        $response = $this->controller->update($request, $news);
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals('Updated News', $response->getData()->data->title);
    }

    public function testDestroy()
    {
        $news = News::factory()->create();
        $response = $this->controller->destroy($news);
        $this->assertEquals(204, $response->getStatusCode());
        $this->assertDatabaseMissing('news', ['id' => $news->id]);
    }

    public function testFilterByType()
    {
        News::factory()->count(2)->create(['type' => 'Event']);
        News::factory()->create(['type' => 'Bource']);
        $response = $this->controller->filterByType('Event');
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertCount(2, $response->getData()->data);
    }

    public function testSearch()
    {
        News::factory()->create([
            'title' => 'Test News',
            'content' => 'This is a test',
            'created_at' => '2023-06-15',
        ]);
        News::factory()->create([
            'title' => 'Another News',
            'content' => 'This is another test',
            'created_at' => '2023-07-20',
        ]);

        $request = new Request([
            'query' => 'test',
            'month' => 6,
            'year' => 2023,
        ]);
        $response = $this->controller->search($request);
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertCount(1, $response->getData()->data);
    }
}











