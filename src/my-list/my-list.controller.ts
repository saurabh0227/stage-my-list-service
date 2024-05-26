import { Controller, Post, Delete, Get, Body, Query } from '@nestjs/common';
import { MyListService } from './my-list.service';

@Controller('my-list')
export class MyListController {
  constructor(private readonly myListService: MyListService) {}

  @Post('add')
  async addToList(
    @Body()
    body: {
      userId: string;
      itemId: string;
      itemType: 'Movie' | 'TVShow';
    },
  ) {
    return this.myListService.addToList(
      body.userId,
      body.itemId,
      body.itemType,
    );
  }

  @Delete('remove')
  async removeFromList(@Body() body: { userId: string; itemId: string }) {
    return this.myListService.removeFromList(body.userId, body.itemId);
  }

  @Get('items')
  async listItems(
    @Query('userId') userId: string,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    return this.myListService.listItems(userId, page, limit);
  }
}
