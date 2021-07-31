using System;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Services
{
    public class ResponseCacheService : IResponseCacheService
    {
        private readonly IDatabase _database;
        public ResponseCacheService(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task CacheResponseAsync(string cachKey, object response, TimeSpan timeToLive)
        {
            if(response == null)
            {
                return;
            }

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };

            var serialisedResponse = JsonSerializer.Serialize(response, options);

            await _database.StringSetAsync(cachKey, serialisedResponse, timeToLive);
        }

        public async Task<string> GetCachechResponseAsync(string cachKey)
        {
            var cachedResponse = await _database.StringGetAsync(cachKey);
            if(cachedResponse.IsNullOrEmpty)
            {
                return null;
            }
            
            return cachedResponse;
        }
    }
}