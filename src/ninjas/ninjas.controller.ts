import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas --> []
  // /ninjas?type=fast
  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  // GET /ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  // POST /ninjas --> Create ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    // Parse body
    return {
      name: createNinjaDto.name,
    };
  }

  // PUT /ninjas/:id --> {...} --> Update ninja
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      name: updateNinjaDto,
    };
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return {
      id,
    };
  }
}
